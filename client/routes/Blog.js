React = require('react');

var Blog = React.createClass({
	render: function() {
		return (
			<div className='right-content'>
				<h1><b>Hey, a Blog</b></h1>
				<h3>5/20/15</h3>
				<p>{'Alright, so started off with the text links finished (glow and everything) and wanted to move on to getting the glow around the signature working. Searched around, found all the \'fe\' svg elements, then got halfway through before realizing that React doesn\'t support those elements! So now... not sure where to head. Maybe I\'ll try putting all this SVG stuff directly in the html--oh, but then it\'s not gonna play well when I get responsive stuff working... yeah, I"m not too sure where to head at this point. Tried d3 but it didn\'t play along with React... ugh, I\'ve already looked into d3 so many times before, should I just try again? I mean, "attach to this element" is basically the same as writing out the element with JSX, right? I\'ll do that. Just suck it up and learn it, because if you\'re planning to work with SVG a lot more, it\'ll come in handy, and it\'s a good library to know anyway. Cool, on three "go team" break.'}</p>
				<h3>5/22/15</h3>
				<p>{'Saw an article on Hacker News about flex-box, decided that I should get my styling under control and try out flex-box at the same time! So mostly just getting everything consolidated under '}<code>app.less</code>{' and try my best to get stuff back the way it was looking.'}</p>
				<h3>5/23/15</h3>
				<p>{'So styling is in check again, things are working... mostly. Started working on the responsive mobile view. '}<code>flex-box</code>{' playing along nicely, and now I\'m just wrestling with the SVG to get the proportions in sync with the tool bar ('}<code>height: 100px</code>{'). Currently seeing if I can manipulate the entire element\'s '}<code>view-box</code>{ ' property in css, but I\'m now having my doubts.'}</p>			
			</div>
		);
	}
});

module.exports = Blog;
