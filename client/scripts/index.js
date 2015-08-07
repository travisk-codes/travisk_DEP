var React = require('react');
var Router = require('react-router');
var Menu = require('./Menu');
var Signature = require('./Signature');

const shadowSize = 7;

////// LEFT COLUMN
var LeftColumn = React.createClass({
	getInitialState: function() {
		var hue = parseInt(Math.random() * 360); // [0, 360]
		var sat = parseInt(Math.random() * 67) + 33 + '%'; // [33, 100]
		var lum = parseInt(Math.random() * 33) + 33 + '%'; // [33, 66]
		var color = 'hsla(' + hue + ',' + sat + ',' + lum + ',1)';

		return { backgroundColor: color };
	},

  render: function() {
		return (
			<div id='left-column' style={ this.state }>
				<div id='left-content'>
					<Signature shadowMagnitude={ shadowSize } />
					<Menu />
				</div>
			</div>
		);
	}
});

////// SUB-MENU
var SubMenu = React.createClass({
	render: function() {
		return (
			<div id='sub-menu'>
				<ul>
					<li>SOURCES OF MOTIVATION</li><br />
					<li>SOME OTHER PAGE LOL</li><br />
				</ul>
			</div>
		);
	}
});

////// RIGHT COLUMN
var RightColumn = React.createClass({
	render: function() {
		return (
			<div id='right-column'>
				<div id='right-content'>
					<Router.RouteHandler />
					{/*<div id='column-shadow' shadowMagnitude={ shadowSize } style={{ width: '4px' }}/>*/}
				</div>
			</div>
		);
	}
});

////// PAGE
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

////// ROUTING
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
