import * as Types from '../action-types';

let initState = {
    msg: '',
    error: 0,
    user: null
};
export default function home(state = initState, action) {
    switch (action.type) {
        case Types.SET_USERINFO:
            return {...action.payload};
            break;
    }
    return state;
};