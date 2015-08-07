var React = require('react');

var Box = React.createClass({
  render: function() {
    return (
      <div id='iphone'>
        <object data='http://www.cnn.com' width='320' height='480'>
          <embed src='http://www.cnn.com' width='320' height='480' />
        </object>
        <div id='iphone_button' />
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
