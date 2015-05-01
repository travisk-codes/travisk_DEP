var React = require('react')
	, Router = require('react-router');

var MainMenu = React.createClass({
	render: function() {
		return (
			<div className='main-menu'>
				<ul>
					<li><Router.Link to='home'>HOME</Router.Link></li>
					<li><Router.Link to='about'>ABOUT</Router.Link></li>
					<li><Router.Link to='projects'>PROJECTS</Router.Link></li>
					<li><Router.Link to='contact'>CONTACT</Router.Link></li>
					<li><Router.Link to='blog'>BLOG</Router.Link></li>
				</ul>
			</div>
		);
	}
});

var LeftColumn = React.createClass({
	render: function() {
		return (
			<div className='left-column'>
				<img id='signature' src='tdk.svg' />
				<MainMenu />
			</div>
		);
	}
});

var Page = React.createClass({
	render: function() {
		return (
			<div className='container'>
				<LeftColumn />
				<Router.RouteHandler />
			</div>
		);
	}
});

var routes = {
	Home: require('../routes/Home'),
	About: require('../routes/About'),
	Projects: require('../routes/Projects'),
	Contact: require('../routes/Contact'),
	Blog: require('../routes/Blog')
};

var routes = (
	<Router.Route name='page' path='/' handler={Page}>
		<Router.Route name='home' path='/' handler={routes.Home} />
		<Router.Route name='about' path='/about' handler={routes.About} />
		<Router.Route name='projects' path='/projects' handler={routes.Projects} />
		<Router.Route name='contact' path='/contact' handler={routes.Contact} />
		<Router.Route name='blog' path='/blog' handler={routes.Blog} />
	</Router.Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(<Handler />, document.body);
});