
module.exports = Restyle = {
	getBox: function() {
		return {
   		width: window.innerWidth * 0.25,
   		height: window.innerHeight / 1,
   		backgroundColor: 'green',
		};
	},

	getLeftColumn: function() {
		return {
			display: 'block',
			position: 'absolute',
			top: 0,
			bottom: 0,
			margin: 0,
			padding: 0,
			width: window.innerWidth * (1/4),
			height: window.innerHeight,
			backgroundColor: 'lightcoral',
		};
	},

	getRightColumn: function() {
		return {
			padding: 0,
			margin: 0,
			float: 'right',
			fontSize: 18,
			width: window.innerWidth * (3/4),
			height: window.innerHeight,
			backgroundColor: '#f8f8f8'
		};
	}
};