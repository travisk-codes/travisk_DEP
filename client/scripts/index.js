var React = require('react')
	, Router = require('react-router')
	, Restyle = require('./style.js')
	, d3 = require('d3')
	, Signature = require('./Signature.js');

var signature

var MainMenu = React.createClass({
	render: function() {
		return (
			<div className='main-menu'>
				<ul>
					<li><Router.Link to='blog'>
						<span id='blog'><b>BLOG</b></span>
					</Router.Link></li>
					<li><Router.Link to='about'>
						<span id='about'><b>ABOUT</b></span>
					</Router.Link></li>
					<li><Router.Link to='contact'>
						<span id='contact'>CONTACT</span>
					</Router.Link></li>
					<li><Router.Link to='projects'>
						<span id='projects'>PROJECTS</span>
					</Router.Link></li>
				</ul>
			</div>
		);
	}
});

var LeftContent = React.createClass({
	render: function() {
		return (
			<div className='left-content'>
				<Router.Link to='home'>
					{/*<img id='signature' src='/img/tdk.svg' draggable='false' />*/}
					<Signature />
				</Router.Link>
				<MainMenu />
			</div>
		);
	}
})

var LeftColumn = React.createClass({
	getInitialState: function() {
		return { style: Restyle.getLeftColumn() };
	}, handleResize: function(e) {
    this.setState(this.getInitialState());
  }, componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
  }, componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  }, render: function() {
		return (
			<div className='left-column' style={this.state.style}>
				<LeftContent />
			</div>
		);
	}
});

var RightColumn = React.createClass({
	getInitialState: function() {
		return { style: Restyle.getRightColumn() };
	},
	handleResize: function(e) {
    this.setState(this.getInitialState());
  },
  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
  },
  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },
	render: function() {
		return (
			<div className='right-column' style={this.state.style}>
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