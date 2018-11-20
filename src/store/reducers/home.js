import * as Types from '../action-types';

let initState = {
    currentLesson: '0',
    slider: {
        loading: false,
        list: []
    },
    lesson: {
        loading: false,
        hasMore: true,
        offset: 0,//偏移量
        limit: 5,
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
        case Types.GET_LESSONS:
            return {...state, lesson: {...state.lesson, loading: true}};
            break;
        case Types.GET_LESSONS_SUCCESS:
            return {
                ...state, lesson: {
                    ...state.lesson,
                    loading: false,
                    hasMore: action.payload.hasMore,
                    list: [...state.lesson.list, ...action.payload.list],
                    offset: state.lesson.offset + action.payload.list.length
                }
            };
            break;
        case Types.CLEAR_LESSON:
            return {
                ...state, lesson: {
                    ...state.lesson,
                    offset: 0,
                    list: [],
                    loading: false,
                    hasMore: true
                }
            };
            break;
    }
    return state;
}