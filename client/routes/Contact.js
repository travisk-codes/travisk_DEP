React = require('react');

var Contact = React.createClass({
	getText: function() {
		var emailText = 'Good ol\' fashioned email';
		var text = 'I\'m sure there\'s others...';
		return (
			<ul>
				<li><a href='http://www.facebook.com/travisdkohlbeck' target='_blank'>Facebook</a></li>
				<li><a href='https://www.linkedin.com/in/traviskohlbeck' target='_blank'>LinkedIn</a></li>
				<li><a href='https://soundcloud.com/tdkohlbeck' target='_blank'>SoundCloud</a></li>
				<li><a href='https://github.com/tdkohlbeck' target='_blank'>GitHub</a></li>
				<li><a href='http://www.last.fm/user/Thadius_Dean' target='_blank'>Last.fm</a></li>
				<li><a href='mailto:tdkohlbeck+travisk@gmail.com'>{emailText}</a></li>
				<li>{text}</li>
			</ul>
		);
	},

	render: function() {
		return (
			<div className='right-content'>
				<h1><b>Me Around the Web</b></h1>
				<p>{this.getText()}</p>
			</div>
		);
	}
});

module.exports = Contact;
