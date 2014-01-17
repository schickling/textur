window.hexColorForValue = function(val) {
	var intensityString = (val * 255).toString(16);

	return '#' + intensityString + intensityString + intensityString;
}

window.generateRandomArray = function(seed, height, width) {
	var randomValues = new Array(height);

	for(i = 0; i < height; i++) {
		randomValues[i] = new Array(width);
		for(int j = 0; j < width; j++) {
			randomValues[i][j] = Math.random();
		}
	}

	return randomValues;
}