import React, {Component} from 'react';
import './index.less';
import {NavLink} from 'react-router-dom';

export default class TabBar extends Component {
    render() {
        return (
            <nav className="nav-bar">
                <NavLink to="/home">
                    <i className="iconfont icon-xingqiu"></i>
                    <span>首页</span>
                </NavLink>
                <NavLink to="/lesson">
                    <i className="iconfont icon-react"></i>
                    <span>我的课程</span>
                </NavLink>
                <NavLink to="/profile">
                    <i className="iconfont icon-xiaolian"></i>
                    <span>个人中心</span>
                </NavLink>
            </nav>
        )
    }
}