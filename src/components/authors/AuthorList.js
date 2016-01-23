import React, {Component} from 'react';
import AuthorRow from './AuthorRow';

class AuthorList extends Component {

    static propTypes = {
        authors: React.PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            authors: []
        };
    }


    componentWillReceiveProps(nextProps) {
        let newAuthors = nextProps.authors.map((author) => {
            return (<AuthorRow author={author} />);
        });
        this.setState({
            authors: newAuthors
        });
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                </thead>
                <tbody>
                    {this.state.authors}
                </tbody>
            </table>
        );
    }
}


export default AuthorList;