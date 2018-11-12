import * as Types from '../action-types';

let initState = {
    currentLesson: '0',
    slider: {
        loading: false,
        list: []
    }
};

export default function home(state = initState, action) {
    switch (action.type) {
        case Types.SET_CURRENT_LESSON:
            return {...state, currentLesson: action.lesson};
            break;
        case Types.GET_SLIDERS:
            return {...state, slider: {...state.slider, loading: true}};
            break;
        case  Types.GET_SLIDERS_SUCCESS:
            return {...state, slider: {loading: false, list: action.payload}};
            break;
    }
    return state;
}