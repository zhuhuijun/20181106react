import  React from 'react';
import ReactDOM,{render} from 'react-dom';
import Home from "./containers/Home/Home";
import Lesson from "./containers/Lesson/Lesson";
import Profile from "./containers/Profile/Profile";
import {HashRouter,Route,Switch} from 'react-router-dom';
render(<HashRouter>
    <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/lesson' component={Lesson}/>
    </Switch>
</HashRouter>,document.getElementById('root'))