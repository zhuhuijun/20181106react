import * as Types from '../action-types';
import {reg, login, validate} from '../../api/user';

let actions = {
    toLogin(userInfo, push, from) {
        return (dispatch) => {
            login(userInfo).then((result) => {
                dispatch({type: Types.SET_USERINFO, payload: result});
                if (result.error === 0) {
                    console.info('from', from);
                    if (from) {
                        push(from);
                    } else {
                        push('/profile');
                    }
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
    },
    toValidate() {
        return (dispatch) => {
            dispatch({type: Types.SET_USERINFO, payload: validate()});
        };
    }
};
export default actions;