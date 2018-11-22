import React, {Component} from 'react';
import './index.less';
import {withRouter} from 'react-router-dom';

class ReturnHeader extends Component {
    componentDidMount() {
        console.info(this.props);
    }

    goback = () => {
        this.props.history.go(-1);
    }

    render() {
        return (

            <div className='returnheader'>
                <i className='iconfont icon-fanhui' onClick={this.goback}></i>
                {this.props.title}
            </div>
        )
    }
}

export default withRouter(ReturnHeader)