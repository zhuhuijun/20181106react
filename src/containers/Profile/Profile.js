import React, {Component} from 'react';
import  bg from '../../images/login-bg.png';
import  avatar from '../../images/avatar.png';
import {Link} from 'react-router-dom';
import './index.less';
export default class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className='profile-bg'>
                    <img src={bg} alt=""/>
                    <div className='avatar'>
                        <img src={avatar} alt=""/>
                    </div>
                    <Link to="/login" className='btn'>登录</Link>
                </div>
            </div>
        )
    }
}