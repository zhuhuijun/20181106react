import React from 'react';
import ReactDOM, {render} from 'react-dom';
import Home from "./containers/Home/Home";
import Lesson from "./containers/Lesson/Lesson";
import Profile from "./containers/Profile/Profile";
import {HashRouter, Route, Switch} from 'react-router-dom';
import TabBar from "./components/TabBar/TabBar";
import './common/index.less';
import store from './store';
import {Provider} from 'react-redux';
import Login from "./containers/Login/Login";
import Reg from "./containers/Reg/Reg";
render(<Provider store={store}>
    <HashRouter>
        <div>
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/lesson' component={Lesson}/>
                <Route path='/login' component={Login}/>
                <Route path='/reg' component={Reg}/>
            </Switch>
            <TabBar/>
        </div>

    </HashRouter>
</Provider>, document.getElementById('root'))