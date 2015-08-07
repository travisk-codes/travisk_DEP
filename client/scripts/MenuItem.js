var React = require('react');
var Router = require('react-router');

var MenuItem = React.createClass({
	render: function() {
		return (
			<text x='0' y='00' className='menu-item'
													id={ 'menu-item-' + this.props.id }>
				<Router.Link to={ this.props.id }>
					{ this.props.id.toUpperCase() }
				</Router.Link>
			</text>
		)
	}
});

module.exports = MenuItem;