import React, {Component, PropTypes} from 'react';
import TextInput from '../common/textInput';

class CourseForms extends Component {

    static PropTypes = {
        course: PropTypes.object,
        error: PropTypes.string,
        onChange: PropTypes.func,
        onClick: PropTypes.func
    };

    constructor() {
        super();
    }

    render() {
        return (
            <form>
                <TextInput
                        name="title"
                        label="Title"
                        value={this.props.course.title}
                        onChange={this.props.onChange}
                        placeholder="Title"
                        error={this.props.errors.title}
                        af={true}
                    />
                <TextInput
                        name="author"
                        label="Author"
                        value={this.props.course.author.name}
                        onChange={this.props.onChange}
                        placeholder="Author"
                        error={this.props.errors.author}
                    />
                <TextInput
                        name="category"
                        label="Category"
                        value={this.props.course.category}
                        onChange={this.props.onChange}
                        placeholder="First Name"
                        error={this.props.errors.category}
                    />
                <TextInput
                        name="length"
                        label="Length"
                        value={this.props.course.length}
                        onChange={this.props.onChange}
                        placeholder="Course Length"
                        error={this.props.errors.length}
                    />
                <TextInput
                        name="watchHref"
                        label="Video Link"
                        value={this.props.course.watchHref}
                        onChange={this.props.onChange}
                        placeholder="http://some.video.link"
                        error={this.props.errors.watchHref}
                    />
                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
            </form>
        );
    }
}

export default CourseForms;