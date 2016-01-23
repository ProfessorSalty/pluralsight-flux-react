import React, {Component} from 'react';
import {Link} from 'react-router';

class AuthorRow extends Component {
    static ContextTypes = {
        router: React.PropTypes.func
    };

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
                <tr key={this.props.author.id}>
                    // <td><a href={'/#authors/' + this.props.author.id}>{this.props.author.id}</a></td>
                    <td><Link to="manageAuthor" params={{id: this.props.author.id}}>{this.props.author.id}</Link></td>
                    <td>{this.props.author.firstName} {this.props.author.lastName}</td>
                </tr>
            );
    }
}

export default AuthorRow;