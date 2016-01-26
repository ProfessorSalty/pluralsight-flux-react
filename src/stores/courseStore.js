import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';
import {EventEmitter} from 'events';
import _ from 'lodash';

const CHANGE_EVENT = 'change';

let _courses = [];

const CourseStore = Object.assign({}, EventEmitter.prototype, {

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    getAllCourses: () => {
        return _courses;
    },

    getCourseById: (id) => {
        return _.find(_courses, {id: id});
    }

});

Dispatcher.register((action) => {
    switch(action.actionType) {
        case ActionTypes.INITIALIZE:
            _courses = action.initialData.courses;
            CourseStore.emitChange();
            break;
        case ActionTypes.CREATE_COURSE:
            _courses.push(action.course);
            CourseStore.emitChange();
            break;
        case ActionTypes.UPDATE_COURSE:
            let existingCourse = _.find(_courses, {id: action.course.id}),
                existingCourseIndex = _.indexOf(_courses, existingCourse);
            _courses.splice(existingCourseIndex, 1, action.course);
            CourseStore.emitChange();
            break;

        case ActionTypes.DELETE_COURSE:
            _.remove(_courses, (course) => action.id === course.id);
            CourseStore.emitChange();
            break;
        default:
    }
});

export default CourseStore;