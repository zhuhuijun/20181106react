//创建关于首页的更改redux的所有动作
import  * as Types from '../action-types';
let actions={
    setCurrentLesson(type){
        return{
            type:Types.SET_CURRENT_LESSON,
            lesson:type
        }
    }
};
export  default  actions;