import React from 'react';
import ReactDOM, {render} from 'react-dom';
import Home from "./containers/Home/Home";

import {HashRouter, Route, Switch} from 'react-router-dom';
import TabBar from "./components/TabBar/TabBar";
import './common/index.less';
import store from './store';
import {Provider} from 'react-redux';
import Login from "./containers/Login/Login";
import Reg from "./containers/Reg/Reg";
import PrivateRoute from "./PrivateRoute";
import Detail from "./containers/Detail/Detail";
import async from './asyncComponents';

let Profile = async(() => import('./containers/Profile/Profile'));
let Lesson = async(() => import('./containers/Lesson/Lesson'));
//import Lesson from "./containers/Lesson/Lesson";

render(<Provider store={store}>
    <HashRouter>
        <div>
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/profile' component={Profile}/>
                <PrivateRoute path='/lesson' component={Lesson}/>
                <Route path='/login' component={Login}/>
                <Route path='/reg' component={Reg}/>
                <Route path='/detail/:id' component={Detail}/>
            </Switch>
            <TabBar/>
        </div>

    </HashRouter>
</Provider>, document.getElementById('root'))