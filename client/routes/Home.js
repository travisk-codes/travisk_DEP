React = require('react');

var Home = React.createClass({
	getText: function() {
		return 'At some point this will be my personal website, but right now I\'m just learning how to build websites with it! Have fun...';
	},

	render: function() {
		return (
			<div className='right-content'>
				<h1><b>Welcome!</b></h1>
				<br />
				<p>{this.getText()}</p>
			</div>
		);
	}
});

module.exports = Home;
