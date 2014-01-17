window.hexColorForValue = function(val) {
	var intensityString = (val * 255).toString(16);

	return '#' + intensityString + intensityString + intensityString;
}

window.generateRandomArray = function(seed, width, height) {
	var randomValues = [];

	for(var y = 0; y < height; y++) {
		randomValues[y] = [];
		for(var x = 0; x < width; x++) {
			randomValues[y][x] = Math.random();
		}
	}

	return randomValues;
}