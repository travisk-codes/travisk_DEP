var React = require('react');
var Router = require('react-router');
var d3 = require('d3');
var Menu = require('./Menu');

var LeftColumn = React.createClass({
	getInitialState: function() {
		var hue = parseInt(Math.random() * 360); // [0, 360]
		var sat = parseInt(Math.random() * 67) + 33 + '%'; // [33, 100]
		var lum = parseInt(Math.random() * 33) + 33 + '%'; // [33, 66]
		var color = 'hsla(' + hue + ',' + sat + ',' + lum + ',1)';
		
		return { backgroundColor: color };
	},

	getPercent: function() {
		return parseInt(Math.random() * 100);
	},

  render: function() {
		return (
			<div id='left-column' style={ this.state }>
				<div id='left-content'>
					<Menu />
					{/* menu I want
					<Menu>
						<Signature>
						<SvgText id='blog' />
						<SvgText id='about' />
						<SvgText id='contact' />
						<SvgText id='projects' />
					</Menu>*/}
				</div>
			</div>
		);
	}
});

var RightColumn = React.createClass({
	render: function() {
		return (
			<div id='right-column'>
				<div id='right-content'>
					<Router.RouteHandler />
				</div>
			</div>
		);
	}
});

var Page = React.createClass({
	render: function() {
		return (
			<div id='container'>
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
	Blog: require('../routes/Blog'),
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