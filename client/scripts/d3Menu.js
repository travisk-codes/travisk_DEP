var d3 = require('d3');

var d3Menu = {};
d3Menu.create = function(el) {

	var clipPath = d3.select(el).select('defs').append('clipPath')
			.attr('id', 'menuClipPath');

	clipPath.append('text')
			.attr('x', '0')
			.attr('y', '150')
			.attr('class', 'menu-item')
			.attr('id', 'menu-item-blog')
			.text('BLOG');
};

module.exports = d3Menu;