var React = require('react')
  , Restyle = require('../scripts/style.js');

var Box = React.createClass({
  getInitialState: function() {
    return { style: Restyle.getBox() };
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
    return <div style={this.state.style}>Current window width: {this.state.style.width}</div>;
  }
});

var Projects = React.createClass({
	render: function() {
		return (
			<div id='projects'>
				<Box />
			</div>
		);
	}
});

module.exports = Projects;
