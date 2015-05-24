React = require('react');

var About = React.createClass({
	getText: function() {
		return 'My name is Travis Kohlbeck. I\'m learning web design and development! I also do other stuff too, but right now programming is firing on all cylinders.';
	},

	render: function() {
		return (
			<div id='about'>
				<h1><b>Who is This?</b></h1>
				<p>{'My name is Travis Kohlbeck. I\'m learning web design and development! I also do other stuff too, but right now programming is firing on all cylinders.'}</p>
			</div>
		);
	}
});

module.exports = About;