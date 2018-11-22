import * as Types from '../action-types';
import {reg, login} from '../../api/user';
import {getLessons, getSliders} from "../../api/home";

let actions = {
    toLogin(userInfo, push) {
        return (dispatch) => {
            login(userInfo).then((result) => {
                dispatch({type: Types.SET_USERINFO, payload: result});
                if (result.error === 0) {
                    push('/profile');
                }
            });
        };
    },
    toReg(userInfo, push) {
        return (dispatch) => {
            reg(userInfo).then((result) => {
                if (result.error === 1) {
                    dispatch({type: Types.SET_USERINFO, payload: result});
                } else {
                    push('/login');
                }
            });
        };
    }
};
export default actions;