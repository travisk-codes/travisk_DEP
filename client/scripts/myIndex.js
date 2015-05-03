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

var Signature = React.createClass({
	render: function() {
		return (
			<div className='sig-container'>
				<img id='signature' src='/img/tdk.svg' />
			</div>
		);
	}
})

var LeftColumn = React.createClass({
	render: function() {
		return (
			<div className='col-xs-6 col-md-6 col-lg-6 left-column'>
				<Signature />
				<MainMenu />
			</div>
		);
	}
});

var RightColumn = React.createClass({
	render: function() {
		return (
			<div className='col-xs-6 col-md-6 col-lg-6 right-column'>
				<Router.RouteHandler />
			</div>
		);
	}
})

var Page = React.createClass({
	render: function() {
		return (
			<div className='container'>
				<LeftColumn />
				<RightColumn />
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