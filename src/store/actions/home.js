//创建关于首页的更改redux的所有动作
import * as Types from '../action-types';
import {getSliders, getLessons} from '../../api/home';

let actions = {
    setCurrentLesson(type) {
        return {
            type: Types.SET_CURRENT_LESSON,
            lesson: type
        }
    },
    setSliders() {
        return (dispatch) => {//dispath 是中间件包装后的dispatch
            dispatch({type: Types.GET_SLIDERS});//将redux的数据改变为正在加载
            dispatch({type: Types.GET_SLIDERS_SUCCESS, payload: getSliders()});
        }
    },
    setLessons() {
        return (dispatch, getState) => {//store 中个getstate
            let {
                currentLesson,
                lesson: {limit, offset, hasMore, loading}
            } = getState().home;
            if (hasMore && !loading) {
                dispatch({type: Types.GET_LESSONS});//将loading的状态改掉
                dispatch({type: Types.GET_LESSONS_SUCCESS, payload: getLessons(limit, offset, currentLesson)});
            }
        }
    }
};
export default actions;