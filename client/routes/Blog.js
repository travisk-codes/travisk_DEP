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
				<p>{'I did it! The site is now fully responsive. The main content of the page is set up to be around 80 characters per line, and there are now both big screen and small screen versions, both catering to the 80 character line. Phew! Now I guess the last big parts are... let\'s see... random color or slowly shifting color, fully working SVG and shadow effects... and then maybe some extra stuff too?'}</p>
				<h3>5/24/15</h3>
				<p>{'Yeah, d3 is gonna take me a while I think. Found an issue with content not being scrollable in the right column, turns out the solution is merely '}<code>overflow: auto</code>{', which is nice.'}</p>
				<h3>6/1/15</h3>
				<p>{'WELP. I figured out how I\'m gonna get my paths moving around. Turns out the path data can contain both relative and absolute movement commands, so I\'m just gonna make the first command absolute, the rest relative, and then I\'ll concatenate a calculation onto a string and feed that into the svg. Finally, my god. Not very elegant, but it really seems like there may not be another way. Or at least another way that is easy to find. Now I\'m gonna go read some more about the DOM.'}</p>
				<h3>6/2/15</h3>
				<p>{'I did it. I finally did it. The clipping path is finally working. And it turns out that I couldn\'t have done what I wanted to do yesterday anyway! Turns out most of the path data were relatively positioned curves anyway, but at the very end there was an absolutely positioned curve. And you can\'t know what the relative coordinates would be. There\'s no easy conversion (besides lots of arithmetic.) So I got it working by just futzing around with d3 and svg elements. God... what a pain in the ass. Turns out it just had to be the right com... oh, actually it was mostly learning that the clipping path definition actually has to be called "clipPath". Ugh. But it\'s working now, and so I just have to make sure the clipping is working properly and somehow get a second path group color-filled... Here\'s hoping an answer comes to me in my sleep.'}</p>
				<p>{'Actually I had an idea just now. Figure out how to do a reverse-clip, and then have a second signature that\'s shadow colored be clipped by that path! Bing bang boom.'}</p>
				<h3>6/3/15</h3>
				<p>{'Well, I have my internal drop shadow. And it looks like it may have been more effort than it\'s worth. We\'ll see. It may look better (or develop the right perspective). But it\'s there! Finally. I guess next is figuring out the setInterval setTimeout stuff and get a function moving the clip path around. Sweet.'}</p>
				<h3>7/1/15</h3>
				<p>{'Finally. Finally the signature drop shadow looks good, and is animating. Now comes the animation part! I think what I\'m going to do is try to find someone who did something similar. Some sort of d3 example where things are rotating about an axis. Surely there\'s a solar system example I can check out. Oh, but yeah, next thing to do (here\'s a '}<code>{'TODO'}</code>{'so you see it): positioning in SVG is going to be a pain in the ass. Break out the menu items into their own elements so that you can position them with css in the "small page" section. Maybe you could even create a d3 script to create the dropshadow for each separate element--what a thought! So yeah, do that next. yay!'}</p>
				<h3></h3>
				<p>{''}</p>
				<h3></h3>
				<p>{''}</p>
				<br />
				<br />ß
			</div>
		);
	}
});

module.exports = Blog;
