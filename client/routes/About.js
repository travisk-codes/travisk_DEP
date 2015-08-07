React = require('react');

var About = React.createClass({
	render: function() {
		return (
			<div id='about'>
				<h1><b>Who is This?</b></h1>
				<p>{'My name is Travis Kohlbeck. I\'m learning web design and development! I also do other stuff too, but right now programming is firing on all cylinders.'}</p>
				<br />
				<h1><b>Sources of Motivation</b></h1>
				<p>{'Down in the gutter? The following things helped me snap out of it.'}</p>
				<p><a href='http://redd.it/3d02wg' target='_blank'>
					School in Afghanistan
				</a></p>
				<p><a href='http://qr.ae/7Qvbfv' target='_blank'>
					How do you get a job as a designer without going to design school?
				</a></p>
			</div>
		);
	}
});

module.exports = About;
