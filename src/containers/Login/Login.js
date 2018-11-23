import React, {Component} from 'react';
import './index.less';
import ReturnHeader from "../../components/ReturnHeader/ReturnHeader";
import Alert from "../../components/Alert/Alert";
import {Link} from 'react-router-dom'
import avatar from "../../images/avatar.png";
import {connect} from 'react-redux';
import actions from "../../store/actions/user";

class Login extends Component {
    componentDidMount() {
        if (this.props.location.state) {
            console.info(this.props.location.state.from);
        }
    }

    login() {
        let from = this.props.location.state && this.props.location.state.from;
        this.props.toLogin({username: this.username.value, userpwd: this.userpwd.value}
            , this.props.history.push
            , from);
    }

    render() {
        return (
            <div className='login'>
                <ReturnHeader title='登录'/>
                <ul className='container'>
                    <div className='avatar-container'>
                        <div className='avatar'>
                            <img src={avatar} alt=""/>
                        </div>
                    </div>
                    <li><input type="text" placeholder='用户名' ref={(username) => this.username = username}/></li>
                    <li><input type="password" placeholder='密码' ref={(userpwd) => this.userpwd = userpwd}/></li>
                    <li><Link to='/reg'>前往注册</Link></li>
                    <li>
                        <button onClick={this.login.bind(this)}>登录</button>
                    </li>
                    <li><Alert/></li>
                </ul>
            </div>
        )
    }
};
export default connect((state) => ({...state.user}), actions)(Login);