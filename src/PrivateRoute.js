import React, {Component} from 'react';
import {Route, withRouter} from 'react-router-dom';
import {validate} from './api/user';

class PrivateRoute extends Component {
    componentDidMount() {
        validate().then(res => {
            if (!res.user) {
                this.props.history.push({
                    pathname: '/login',
                    state: {from: this.props.path}
                })
            }
        })
    }

    render() {
        return (
            <Route {...this.props} />
        )
    }
};
export default withRouter(PrivateRoute);