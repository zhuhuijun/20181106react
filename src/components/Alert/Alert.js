import React, {Component} from 'react';
import './index.less';
import {connect} from 'react-redux';

class Alert extends Component {
    render() {
        return (
            this.props.error === 1 ? <div style={{color: 'red'}}>{this.props.msg}</div> : null
        )
    }
};
export default connect((state) => ({...state.user}))(Alert);