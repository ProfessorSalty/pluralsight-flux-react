import React, {Component} from 'react';
import {Link} from 'react-router'; 
import AuthorList from './AuthorList';
let AuthorApi = require('../../api/authorApi');

class AuthorPage extends Component {

    constructor() {
        super();
        this.state = {authors: []};
    }

    componentDidMount() {
        this.setState({
            authors: AuthorApi.getAllAuthors()
        });
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