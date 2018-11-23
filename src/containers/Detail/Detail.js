import React, {Component} from 'react';
import ReturnHeader from "../../components/ReturnHeader/ReturnHeader";
import './index.less';

export default class Detail extends Component {
    render() {
        let lesson = this.props.location.state;
        if (!lesson) {
            lesson = {};
        }
        console.info(lesson);
        let {video, poster} = lesson;
        return (
            <div className='detail'>
                <ReturnHeader title='详情'/>
                <video src={video} poster={poster} controls={true}></video>
            </div>
        )
    }
}