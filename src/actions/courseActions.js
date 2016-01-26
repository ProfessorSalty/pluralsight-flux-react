import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';

let CourseApi = require('../api/courseApi');

const CourseActions = {
    createCourse: (course) => {
        let newCourse = CourseApi.saveCourse(course);

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_COURSE,
            course: newCourse
        });
    },
    updateCourse: (course) => {
        let newCourse = CourseApi.saveCourse(course);

        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_COURSE,
            course: newCourse
        });
    },
    deleteCourse: (id) => {
        CourseApi.deleteCourse(id);

        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_COURSE,
            id: id 
        });
    }
};

export default CourseActions;