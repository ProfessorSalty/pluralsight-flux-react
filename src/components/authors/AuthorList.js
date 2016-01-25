import React, {Component} from 'react';
import AuthorRow from './AuthorRow';

class AuthorList extends Component {

    static propTypes = {
        authors: React.PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
    }

    createAuthorRow(author) {
        return (
            <AuthorRow author={author} />
        );
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <th></th>
                    <th>ID</th>
                    <th>Name</th>
                </thead>
                <tbody>
                    {this.props.authors.map(this.createAuthorRow)}
                </tbody>
            </table>
        );
    }
}


export default AuthorList;