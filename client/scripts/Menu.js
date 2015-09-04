var React  = require('react');
var Router = require('react-router');
var MenuItem = require('./MenuItem');
var d3Menu = require('./d3Menu');

var Menu = React.createClass({
	getInitialState: function() {
		var viewBoxHeight = 1000;
		if (window.innerWidth < 500 /*768*/) {
			viewBoxHeight = 368;
		}
		return { height: viewBoxHeight };
	},

	handleResize: function(e) {
		this.setState(this.getInitialState());
	},

	componentDidMount: function() {
		window.addEventListener('resize', this.handleResize);
		var el = this.getDOMNode();
		d3Menu.create(el);
	},

	componentWillUnmount: function() {
		window.removeEventListener('resize', this.handleResize);
	},

	render: function() {
		var blog = {
			id: 'menu-item-blog',
			style: {
				letterSpacing: '0.89em',
				//fontWeight: 500,
			},
			text: 'BLOG',
		};
		var about = {
			id: 'menu-item-about',
			style: {
				letterSpacing: '0.5em',
				fontWeight: 600,
			},
			text: 'ABOUT',
		};
		var contact = {
			id: 'menu-item-cont',
			style: {
				letterSpacing: '0.11em',
				fontWeight: 500,
			},
			text: 'CONTACT',
		};
		var projects = {
			id: 'menu-item-proj',
			style: {
				letterSpacing: '0.023em',
				fontWeight: 300,
			},
			text: 'PROJECTS',
		};

		var menuItems = [
			blog,
			about,
			contact,
			projects,
		];

		var SVGs = menuItems.map( function(item) {
			return (
				<svg version='1.1' width='100%' height='50px'>
					<text
						id={item.id}
						y='40'
						fontFamily='Helvetica-Bold'
						fontSize='40'
						transform={item.transform}
						style={item.style}
					>
						{item.text}
					</text>
				</svg>
			);
		});

		return (
			<div id='menu' border='solid black'>
				{/*<svg version="1.1" x='0' y='0'
													 width='100%' height='100%'
													 viewBox={ '0 0 600 ' + this.state.height }>
					<defs />
					<g id='menu-items'>
						<Router.Link to='blog'>
							<text x='0' y='150' className='menu-item' id='menu-item-blog' stroke='#f8f8f8' strokeWidth='5'>
								BLOG
							</text>
						</Router.Link>

						<Router.Link to='about'>
							<text x='0' y='280' className='menu-item' id='menu-item-about'>
								ABOUT
							</text>
						</Router.Link>

						<text x='0' y='410' className='menu-item' id='menu-item-cont'>
							<Router.Link to='contact'>
								CONTACT
							</Router.Link>
						</text>

						<text x='0' y='540' className='menu-item' id='menu-item-proj'>
							<Router.Link to='projects'>
								PROJECTS
							</Router.Link>
						</text>
					</g>
				</svg>*/}

				{SVGs}
			</div>
		);
	},
});

module.exports = Menu;
