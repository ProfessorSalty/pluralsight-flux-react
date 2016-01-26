import React, {Component} from 'react';
import {Link} from 'react-router';
import CourseActions from '../../actions/courseActions';
import toastr from 'toastr';

class CourseRow extends Component {

    deleteUser(id, event) {
        event.preventDefault();
        CourseActions.deleteCourse(id);
        toastr.success("Course deleted");
    }

    render() {
        return (
            <tr key={this.props.course.id}>
                <td key={'del' + this.props.course.id}>
                <a href="#" 
                    onClick={this.deleteUser.bind(this, this.props.course.id)}>Delete</a></td>
                <td key={'title' + this.props.course.id}>
                    <Link to="manageCourse" 
                        params={{id: this.props.course.id}}>{this.props.course.title}</Link></td>
                <td key={'name' + this.props.course.id}>{this.props.course.author.name}</td>
                <td key={'cat' + this.props.course.id}>{this.props.course.category}</td>
                <td key={'len' + this.props.course.id}>{this.props.course.length}</td>
                <td key={'wat' + this.props.course.id}><a href={this.props.course.watchHref} target="_blank" >Watch</a></td>
            </tr>
        );
    }
}

export default CourseRow;