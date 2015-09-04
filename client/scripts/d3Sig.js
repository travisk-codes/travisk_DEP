var d3 = require('d3');

var d3Sig = {};
d3Sig.create = function(el, props, shadowSize) {

	// svg defs clipPathOne
	var clipPathOne = d3.select(el).select('defs').append('clipPath')
			.attr('id', 'sigClipPathOne');

	// svg defs clipPathOne path
	clipPathOne.append('path').attr('class', 'sig-shadow')
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
	clipPathTwo.append('path').attr('class', 'sig-shadow')
			.attr('d', props[1]);
			/*.attr('transform', 'translate(-7, -7)');
			.transition()
			.attr('transform', 'translate(7, 7)')
			.duration(5000)
			.delay(1000);*/
};

var t0 = new Date();
var currHour = t0.getHours();

d3.timer(function() {
	var delta = Date.now() - t0; // [0,inf] 1/ms
	var deltaDay = delta / 1000 / 60 / 60 / 24; // [0,inf] 1/day
	var startDay = (currHour / 24) + deltaDay; // [now,inf] 1/day
	var omega = startDay * -2 * Math.PI; // [now,inf] 2*pi rad/day
																			 // negative for cw direction

	var shadowShiftX = 12*Math.sin(omega); // 12px * rev/day
	var shadowShiftY = 12*Math.cos(omega); // 12px * rev/day

	d3.selectAll('.sig-shadow').attr('transform', function() {
		return 'translate('+shadowShiftX+','+shadowShiftY+')';
	});

	d3.select('#left-column').style('border-right', function() {
		return Math.floor(5*Math.sin(omega)) + 'px solid lightgrey';
	}, 60000);
});

module.exports = d3Sig;
