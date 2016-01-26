import React, {Component} from 'react';
import CourseRow from './CourseRow';

class CourseList extends Component {
    
    constructor(props) {
        super(props);
    }

    createCourseRow(course) {
        return (
            <CourseRow course={course} />
        );
    }
    
    render() {
        return (
            <table className="table">
                <thead>
                    <th></th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                    <th></th>
                </thead>
                <tbody>
                    {this.props.courses.map(this.createCourseRow)}
                </tbody>
            </table>
        );
    }
}

export default CourseList;