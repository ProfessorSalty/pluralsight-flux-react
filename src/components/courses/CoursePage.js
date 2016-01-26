import React, {Component} from 'react';
import {Link} from 'react-router';
import CourseStore from '../../stores/courseStore';
import CourseList from './CourseList';

class CoursePage extends Component {
    
    constructor() {
        super();
        this.state = {courses: CourseStore.getAllCourses()};
    }

    _onChange() {
        this.setState({courses: CourseStore.getAllCourses()});
    }

    componentWillMount() {
        CourseStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        CourseStore.removeChangeListener(this._onChange.bind(this));
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={this.state.courses} />
                <Link to="addCourse" className="btn btn-default">Add Course</Link>
            </div>
        );
    }
}

export default CoursePage;


