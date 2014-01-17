window.hexColorForValue = function(val) {
	var intensityString = (val * 255).toString(16);

	return '#' + intensityString + intensityString + intensityString;
}