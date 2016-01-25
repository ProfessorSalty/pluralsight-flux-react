import React, {Component} from 'react';
import {Link} from 'react-router'; 
import AuthorList from './AuthorList';
import AuthorStore from '../../stores/authorStore';
import AuthorActions from '../../actions/authorActions';

class AuthorPage extends Component {

    constructor() {
        super();
        this.state = {authors: AuthorStore.getAllAuthors()};
    }

    _onChange() {
        this.setState({authors: AuthorStore.getAllAuthors()});
    }

    componentWillMount() {
        AuthorStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        AuthorStore.removeChangeListener(this._onChange.bind(this));
    }

    render() {
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors} />
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
            </div>
        );
    }
}

export default AuthorPage;