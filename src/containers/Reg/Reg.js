import React, {Component} from 'react';
import './index.less';
import ReturnHeader from "../../components/ReturnHeader/ReturnHeader";
import avatar from "../../images/avatar.png";
import {connect} from 'react-redux';
import actions from "../../store/actions/user";

class Reg extends Component {
    reg() {
        this.props.toReg({username: this.username.value, userpwd: this.userpwd.value},
            this.props.history.push);
    }

    render() {
        return (
            <div className='login'>
                <ReturnHeader title='注册'/>
                <ul className='container'>
                    <div className='avatar-container'>
                        <div className='avatar'>
                            <img src={avatar} alt=""/>
                        </div>
                    </div>
                    <li><input type="text" ref={(username) => this.username = username}/></li>
                    <li><input type="text" ref={(userpwd) => this.userpwd = userpwd}/></li>
                    <li>
                        <button onClick={this.reg.bind(this)}>注册</button>
                    </li>
                </ul>
            </div>
        )
    }
};
export default connect((state) => ({...state.user}), actions)(Reg);