import React, {Component} from 'react';
import {Link} from 'react-router';
import AuthorActions from '../../actions/authorActions';
import toastr from 'toastr';

class AuthorRow extends Component {

    static propTypes = {
        author: React.PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
    }

    deleteAuthor(id, event) {
        event.preventDefault();
        AuthorActions.deleteAuthor(id);
        toastr.success("Author deleted");
    }

    render() {
        return (
                <tr key={this.props.author.id}>
                    <td><a href="#" onClick={this.deleteAuthor.bind(this, this.props.author.id)}>Delete</a></td>
                    <td><Link to="manageAuthor" params={{id: this.props.author.id}}>{this.props.author.id}</Link></td>
                    <td>{this.props.author.firstName} {this.props.author.lastName}</td>
                </tr>
            );
    }
}

export default AuthorRow;