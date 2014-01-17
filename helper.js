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

window.latticeWithFrequency = function(height, width, latticeDistX, latticeDistY) {

	var numNodesHeight = height / latticeDistX + 1;
	var numNodesWidth = width / latticeDistY + 1;

	var randomValues = generateRandomArray(0, numNodesHeight, numNodesWidth);

	LatticeWithFrequency.prototype.getColor = function(xPos, yPos) {
		//if(xPos % nodeDistWidth == 0 && yPos % nodeDistHeight == 0) { // on lattice point
		//	return randomValues[xPos / nodeDistWidth][yPos / nodeDistHeight];
		//}

		var latticeXPosMin = floor(xPos / latticeDistX);
		var latticeXPosMax = ceil(xPos / latticeDistX);
		var latticeYPosMin = floor(yPos / latticeDistY);
		var latticeYPosMax = ceil(yPos / latticeDistY);

		// calculate distances and values
		distances = [];
		values = [];

		var distanceXToLeft = Math.abs(latticeXPosMin * latticeDistX - xPos);
		var distanceYToTop = Math.abs(latticeYPosMin * latticeDistY - yPos);

		// Order
		// 1    2
		// 
		// 3    4
		distances.push(distance(distanceXToLeft, distanceYToTop));
		distances.push(distance(latticeDistX - distanceXToLeft, distanceYToTop));
		distances.push(distance(distanceXToLeft, latticeDistY - distanceYToTop));
		distances.push(distance(latticeDistX - distanceXToLeft, latticeDistY - distanceYToTop));

		values.push(randomValues[latticeXPosMin][latticeYPosMin]);
		values.push(randomValues[latticeXPosMax][latticeYPosMin]);
		values.push(randomValues[latticeXPosMin][latticeYPosMax]);
		values.push(randomValues[latticeXPosMax][latticeYPosMax]);

		return interpolate(distances, values);
	}

	function distance(xDist, yDist) {
		return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
	}


	function interpolate(distances, values) {
		var res = 0.0;

		var distSum = 0.0;
		for(i = 0; i < distances.length; i++) {
			distSum += distances[i];
		}

		for(i = 0; i < distances.length; i++) {
			res += values[i] * (distances[i] / distSum);
		}

		return res;
	}

}