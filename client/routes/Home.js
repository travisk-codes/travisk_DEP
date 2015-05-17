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
				<p>{'Here are the features I would like for this website to have before I call it "finished":'}</p>
				<ul>
					<li>Friendly and responsive:
						<ul>
							<li>Switch to header and body layout at smaller resolutions</li>
							<li>Play well with the browser zoom feature</li>
						</ul>
					</li>
					<li>A blog section</li>
					<li>My spring project embedded on the Projects page</li>
					<li>Glow around the signature</li>
					<li>(Hopefully) get shadow feature working. I think that is the extra 	bit needed.</li>
				</ul>
			</div>
		);
	}
});

module.exports = Home;
