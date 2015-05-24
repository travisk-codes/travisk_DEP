var React = require('react')


var Box = React.createClass({
  render: function() {
    return (
      <div>
        Current window width: {'bleh'}
      </div>
    );
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