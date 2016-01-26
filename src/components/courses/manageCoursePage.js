import React, {Component} from 'react';
import {Navigation} from 'react-router';
import CourseForms from './CourseForms';
import CourseStore from '../../stores/courseStore';
import CourseActions from '../../actions/courseActions';
import toastr from 'toastr';

class ManageCoursePage extends Component {

  static contextTypes = {
    router: React.PropTypes.func.isRequired
  };
  
  constructor(props, context) {
    super(props, context);
    this.state = {
        course: {
            id: '',
          title: '',
          watchHref: '',
          author: {
              id: '',
              name: ''
          },
          length: '',
          category: ''
        },
        errors: {
          title: '',
          author: '',
          length: '',
          category: ''
        },
        dirty: false
    };
  }

  static willTransitionFrom(transition, component) {
    if(component.state.dirty && !confirm('Leave without saving?')) {
        transition.abort();
    }
  }

  setCourseState = (event) => {
    let field = event.target.name,
        value = event.target.value;
    if(field === "author") {
      this.state.course.author.name = value;
    } else {
      this.state.course[field] = value;
    }
    this.setState({
      course: this.state.course,
      dirty: true
    });
  };

  courseFormIsValid() {
    const course = this.state.course;
    let formIsValid = true;
    if(course.title.length === 0) {
      this.state.errors.title = "Must have a title";
      formIsValid = false;
    } else if(course.author.name.length === 0) {
      this.state.errors.author = "Must have an author";
      formIsValid = false;
    } else if(course.category.length === 0) {
      this.state.errors.category = "Must have a category";
      formIsValid = false;
    } else if(course.length.length === 0) {
      this.state.errors.length = "Must have a length";
      formIsValid = false;
    } else if(course.watchHref.length === 0) {
      this.state.errors.length = "Must have a link";
      formIsValid = false;
    }
    this.setState({
      errors: this.state.errors
    });
    return formIsValid;
  }

  saveCourse = (event) => {
    event.preventDefault();
    if(this.courseFormIsValid()) {
      if(this.state.course.id) {
        CourseActions.updateCourse(this.state.course);
      } else {
        CourseActions.createCourse(this.state.course);
      }
      toastr.success('Course saved');
      this.setState({dirty: false});
      this.context.router.transitionTo('courses');
    }
  };


  componentWillMount() {
    let courseId = this.props.params.id;

    if(courseId) {
      this.setState({
        course: CourseStore.getCourseById(courseId)
      });
    }
    
  }

  render() {
      return (
          <CourseForms course={this.state.course} errors={this.state.errors} onChange={this.setCourseState} onSave={this.saveCourse} />
      );
  }
}

export default ManageCoursePage;