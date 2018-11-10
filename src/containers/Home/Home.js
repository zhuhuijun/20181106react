import React, {Component} from 'react';
import HomeHeader from "./HomeHeader";
import './index.less';
import actions from '../../store/actions/home';
import {connect} from 'react-redux';

class Home extends Component {
    componentDidMount() {
        console.log(this.props);

    }

    changeType = (val) => {
        console.info('parent:val = ' + val);
        this.props.setCurrentLesson(val);
    }

    render() {
        return (
            <div><HomeHeader changeType={this.changeType}/></div>
        )
    }
}

//mapStateToProps 将redux的数据映射到当前组件的属性 state = store.getState()={home:{currentLesson:'0'}}
export default connect((state) => ({...state.home}), actions)(Home);