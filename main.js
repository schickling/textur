var canvasEl = document.getElementById('canvas'),
	context = canvasEl.getContext('2d'),
	drawEl = document.getElementById('draw'),
	width = 0.8 * window.innerWidth,
	height = window.innerHeight;

function init () {
	canvasEl.width = width;
	canvasEl.height = height;
	initListeners();
}

function initListeners () {
	drawEl.addEventListener('click', draw);
}

function draw() {
	context.clearRect(0, 0, width, height);
	randomValues = generateRandomArray(0, width, height);
	for (var y = 0; y < height; y++) {
		for (var x = 0; x < width; x++) {
			var pixel = context.createImageData(1, 1),
				rand = randomValues[y][x] * 255;
			pixel.data[0] = rand;
			pixel.data[1] = rand;
			pixel.data[2] = rand;
			pixel.data[3] = 255;
			context.putImageData(pixel, x, y);
		}
	}
}

init();