import React, {Component} from 'react';
import bg from '../../images/login-bg.png';
import avatar from '../../images/avatar.png';
import {Link} from 'react-router-dom';
import './index.less';
import {connect} from 'react-redux';

class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className='profile-bg'>
                    <img src={bg} alt=""/>
                    <div className='avatar'>
                        <img src={avatar} alt=""/>
                    </div>
                    {this.props.user ? <a className='btn'>{this.props.user.username}</a> :
                        <Link to="/login" className='btn'>登录</Link>}

                </div>
            </div>
        )
    }
};
export default connect((state) => ({...state.user}))(Profile);