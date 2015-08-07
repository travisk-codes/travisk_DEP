var d3 = require('d3');

var d3Sig = {};
d3Sig.create = function(el, props, shadowSize) {

	// svg defs clipPathOne
	var clipPathOne = d3.select(el).select('defs').append('clipPath')
			.attr('id', 'sigClipPathOne');

	// svg defs clipPathOne path
	clipPathOne.append('path').attr('class', 'test_shadow')
			.attr('d', props[0]);
			/*.attr('transform', 'translate(-7, -7)');
			.transition()
			.attr('transform', 'translate(7, 7)')
			.duration(5000)
			.delay(1000);*/

	// svg defs clipPathTwo
	var clipPathTwo = d3.select(el).select('defs').append('clipPath')
			.attr('id', 'sigClipPathTwo');

  // svg defs clipPathTwo path
	clipPathTwo.append('path').attr('class', 'test_shadow')
			.attr('d', props[1]);
			/*.attr('transform', 'translate(-7, -7)');
			.transition()
			.attr('transform', 'translate(7, 7)')
			.duration(5000)
			.delay(1000);*/
};

var t0 = new Date();
var currentSec = t0.getSeconds();

d3.timer(function() {
	var delta = (Date.now() - t0) / 1000 / 60 + (currentSec / 60); // 1 per min
	var omega = -delta * 2 * Math.PI; // 2*pi rad/min

	d3.selectAll('.test_shadow').attr('transform', function() {
		return 'translate(' + 8*Math.sin(omega) + ',' + 8*Math.cos(omega) + ')';
	});

	d3.select('#left-column').style('border-right', function() {
		return 4*Math.sin(omega) + 'px solid lightgrey';
	});
});

module.exports = d3Sig;
