var canvasEl = document.getElementById('canvas'),
	context = canvasEl.getContext('2d'),
	drawEl = document.getElementById('draw'),
	width = parseInt(0.8 * window.innerWidth, 10),
	height = window.innerHeight;

function init() {
	canvasEl.width = width;
	canvasEl.height = height;
	initListeners();
}

function initListeners() {
	drawEl.addEventListener('click', draw);
}

function draw() {
	context.clearRect(0, 0, width, height);
	var randomValues = generateRandomArray(0, width, height),
		imageData = gridToImageData(randomValues);

	context.putImageData(imageData, 0, 0);
}

function gridToImageData(grid) {
	var imageData = context.createImageData(width, height);
	for (var i = 0; i < imageData.data.length; i += 4) {
		var offset = i / 4,
			y = parseInt(offset / width),
			x = offset % width,
			rand = grid[y][x] * 255;
		imageData.data.set([rand, rand, rand, 255], i);
	}
	return imageData;
}

init();