import React, {Component} from 'react';
import {Link} from 'react-router';

class NotFoundPage extends Component {
    render() {
        return (
                <div>
                    <h1>Page not found</h1>
                    <p>Turn back! You've hit a dead end!</p>
                    <p><Link to="app">Return Home</Link></p>
                </div>
            );
    }
}

export default NotFoundPage;