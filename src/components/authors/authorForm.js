import React, {Component, PropTypes} from 'react';
import TextInput from '../common/textInput.js';

class AuthorForm extends Component {

    static propTypes = {
        author: PropTypes.object.isRequired,
        onSave: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        errors: PropTypes.object
    };

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
                <form>
                    <TextInput
                        name="firstName"
                        label="First Name"
                        value={this.props.author.firstName}
                        onChange={this.props.onChange} 
                        placeholder="First Name"
                        error={this.props.errors.firstName}
                        af={true}
                    />

                    <TextInput
                        name="lastName"
                        label="Last Name"
                        value={this.props.author.lastName}
                        onChange={this.props.onChange}
                        placeholder="Last Name"
                        error={this.props.errors.lastName}
                    />

                    <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
                </form>
            );
    }
}

export default AuthorForm;