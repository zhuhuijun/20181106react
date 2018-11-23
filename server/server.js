let express = require('express');
let session = require('express-session');
let bodyParser = require('body-parser');
let app = express();
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'zhuhj'
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,Authorization,Accept,X-Requested-With");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    //这段仅仅为了方便返回json而已
    //res.header("Content-Type", "application/json;charset=utf-8");
    if (req.method == 'OPTIONS') {
        //让options请求快速返回
        res.sendStatus(200);
    } else {
        next();
    }
});
let users = [];
let sliders = require('./mock/sliders');
app.get('/sliders', function (req, res) {
    res.json(sliders);
})
//http://localhost:3000/lessons?limit=5&offset=0&type=1
let lessons = require('./mock/lessons');
app.get('/lessons', function (req, res) {
    let {limit, offset, type} = req.query;
    limit = parseInt(limit);
    offset = parseInt(offset);
    let newlesson = lessons.filter(item => {
        if (type === '0') return true;
        return item.type === type;
    });
    //判断服务端是否有更多数据
    let hasMore = true;
    let len = newlesson.length;
    if (len < (limit + offset)) {
        hasMore = false;
    }
    newlesson = newlesson.slice(offset, offset + limit)
    res.json({hasMore, list: newlesson});
});
//返回参数{msg:'sfsf',error:1,user:{username:''}}
app.post('/login', function (req, res) {
    let {username, userpwd} = req.body;
    let one = users.find(item => item.username === username && item.userpwd === userpwd);
    if (one) {
        req.session.user = req.body;
        res.json({msg: '登录成功', error: 0, user: one});
    } else {
        res.json({msg: '用户不存在', error: 1});
    }
});
app.post('/reg', function (req, res) {
    let {username, userpwd} = req.body;
    let one = users.find(item => item.username === username);
    if (one) {
        res.json({msg: '此用户已存在', error: 1});
    } else {
        users.push({username, userpwd});
        res.json({msg: '注册成功', error: 0})
    }
});
app.get('/validate', function (req, res) {
    if (req.session.user) {
        res.json({msg: '', error: 0, user: {username: req.session.user.username}});
    } else {
        res.json({msg: '', error: 0, user: {username: ''}});
    }
});
app.listen(3000);
console.info('the server is running');
