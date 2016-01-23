var React = require('react'),
    Link = require('react-router').Link;

module.exports = React.createClass({
    render: function() {
        return (
            <tr key={this.props.author.id}>
                <td><Link to="manageAuthor" params={{id: this.props.author.id}}>{this.props.author.id}</Link></td>
                <td>{this.props.author.firstName} {this.props.author.lastName}</td>
            </tr>
        );
    }
});