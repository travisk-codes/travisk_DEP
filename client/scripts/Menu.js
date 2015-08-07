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
		return (
			<div id='menu' border='solid black'>
				<svg version="1.1" x='0' y='0'
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
				</svg>

				{/*<svg version='1.1' width='100%' height='50px'>
					<text y='40' fontFamily='Helvetica-Bold' fontSize='40' transform='scale(2.14,1)'>
						BLOG
					</text>
				</svg>
				<svg version='1.1' width='100%' height='50px'>
					<text y='40' fontFamily='Helvetica-Bold' fontSize='40' transform='scale(1.7,1)'>
						ABOUT
					</text>
				</svg>
				<svg version='1.1' width='100%' height='50px'>
					<text y='40' fontFamily='Helvetica-Bold' fontSize='40' transform='scale(1.24,1)'>
						CONTACT
					</text>
				</svg>
				<svg version='1.1' width='100%' height='50px'>
					<text y='40' fontFamily='Helvetica-Bold' fontSize='40' transform='scale(1.14,1)'>
						PROJECTS
					</text>
				</svg>*/}
			</div>
		);
	},
});

module.exports = Menu;
