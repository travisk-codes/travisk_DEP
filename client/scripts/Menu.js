var React  = require('react');
var Router = require('react-router');

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
	},

	componentWillUnmount: function() {
		window.removeEventListener('resize', this.handleResize);
	},

	render: function() {
		var sigPathOne = 'M97,140.7c9.7,7.8,8.2,14.2,7.5,21.2s-10.7,76.3-13.1,88c-2.4,11.6-12.2,80.8-12.2,104.3c0,23.6-26.5,15.7-26.5-12.7s9.2-80.8,13.1-102.1s9.2-62.6,9.7-81.2c0.1-4.2-0.3-10.9,2.7-16.4c-7.3,4.8-51.4,30.3-57.8,33.7c-9.2,5.4-30.4-8.6-14.9-23.6l1.2,2.4c0,0,16.5-7.5,34.4-18.6c232.1-160.8,272.3-18.6,148.6,136.9c-2.1,2.8-1.6,13.1-3.9,22.2c-2.2,9.1-6.9,11.2-15.5,7.3c-11.9-5.4-19.1-17.7-14.9-25.3c0.1-2.7,3.3-7.3,5.1-10.1s213.8-284-71-132.7C91.6,136.4,97,140.7,97,140.7z';
		var sigPathTwo = 'M266,158.6C269.6,141,283.6,65,285.2,49c1.8-13.9,4.2-19.1,16.7-16.1c12.4,3,16.7,13.4,16.7,13.4s3.4,5.5,0,13s-4.5,13-5.2,18.2s-10.1,49.9-14.6,76.8c14.6-41.4,62.9-117,84.5-154.3c6.3,2.5,18.3,9.7,24.9,23.9c-5.2,6-3,3.4-11.2,15.2c-89.4,149.5-118.7,207.4,97.2,115.7c96.6-35.8,99.9-29.1,105.5-19.7c-7.2,11.9-31,23.6-40,26.5c-8.9,3-107.3,42.5-153.2,59.6s-113.6,14.6-109.1-59.6c-6.3,29.8-11.6,56.6-14.9,77.2s-6.3,38.8-4.8,54.4s-6.7,16.4-13.7,14.9s-16.7-4.8-17.1-30.6C246.5,251.8,263.9,169.8,266,158.6z';

		var pageWidth = window.innerWidth;
		var viewBoxHeight = 1000;
		if (pageWidth < 768) {
			viewBoxHeight = 368;
		}	

		return (
			<div id='menu'>
				<svg version="1.1" x='0' y='0' 
													 width='100%' height='100%' 
													 viewBox={ '0 0 600 ' + this.state.height }>
					<Router.Link to='home'>
						<g id='sig-paths'>
							<path d={ sigPathOne } />
							<path d={ sigPathTwo } />
						</g>
					</Router.Link>
					<g id='menu-items'>
						<text x='0' y='520' className='menu-item' id='menu-item-blog'>
							<Router.Link to='blog'>
								BLOG
							</Router.Link>
						</text>
						<Router.Link to='about'>
							<text x='0' y='660' className='menu-item' id='menu-item-about'>
								ABOUT
							</text>
						</Router.Link>
						<text x='0' y='800' className='menu-item' id='menu-item-cont'>
							<Router.Link to='contact'>
								CONTACT
							</Router.Link>
						</text>
						<text x='0' y='940' className='menu-item' id='menu-item-proj'>
							<Router.Link to='projects'>
								PROJECTS
							</Router.Link>
						</text>
					</g>
				</svg>
			</div>
		);
	},
});

module.exports = Menu;