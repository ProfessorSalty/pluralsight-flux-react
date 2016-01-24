import React, {Component} from 'react';
import {Link} from 'react-router';

class AuthorRow extends Component {

    static propTypes = {
        author: React.PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <tr key={this.props.author.id}>
                    <td><Link to="manageAuthor" params={{id: this.props.author.id}}>{this.props.author.id}</Link></td>
                    <td>{this.props.author.firstName} {this.props.author.lastName}</td>
                </tr>
            );
    }
}

export default AuthorRow;