let express = require('express');
let app = express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    //这段仅仅为了方便返回json而已
    res.header("Content-Type", "application/json;charset=utf-8");
    if (req.method == 'OPTIONS') {
        //让options请求快速返回
        res.sendStatus(200);
    } else {
        next();
    }
});
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
})
app.listen(3000);
console.info('the server is running');
