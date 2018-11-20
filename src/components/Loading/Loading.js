import React, {Component} from 'react';
import './index.less';

export default class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }
}