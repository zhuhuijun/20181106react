import React, {Component} from 'react';
import HomeHeader from "./HomeHeader";
import './index.less';
import actions from '../../store/actions/home';
import {connect} from 'react-redux';
import HomeSlider from "./HomeSlider";
import LessonList from "./LessonList";
import {loadMore, pullRefresh} from '../../util';
import Loading from "../../components/Loading/Loading";

class Home extends Component {
    componentDidMount() {
        if (!this.props.slider.list.length) {
            this.props.setSliders();
        }
        if (!this.props.lesson.list.length) {
            this.props.setLessons();
        }

        loadMore(this.x, this.props.setLessons);
        pullRefresh(this.x, this.props.refresh);
    }

    changeType = (val) => {
        //console.info('parent:val = ' + val);
        this.props.setCurrentLesson(val);
    }

    render() {
        return (
            <div>
                <HomeHeader changeType={this.changeType}/>
                <div className='content' ref={x => this.x = x}>
                    {!this.props.slider.loading ? <HomeSlider lists={this.props.slider.list}/> : <Loading/>}
                    <div className='container'>
                        <h3>
                            <i className='iconfont icon-wode_kecheng'></i>全部课程
                        </h3>
                        <LessonList lists={this.props.lesson.list}/>
                        {this.props.lesson.loading ? <Loading/> : null}
                        {/*<button onClick={() => {
                             this.props.setLessons();
                         }}>加载更多
                         </button>*/}
                    </div>
                </div>
            </div>
        )
    }
}

//mapStateToProps 将redux的数据映射到当前组件的属性 state = store.getState()={home:{currentLesson:'0'}}
export default connect((state) => ({...state.home}), actions)(Home);