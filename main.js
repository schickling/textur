var canvasEl = document.getElementById('canvas'),
	context = canvasEl.getContext('2d'),
	drawEl = document.getElementById('draw'),
	inputIds = ['latticeDistanceX', 'latticeDistanceY', 'octaves'],
	vals = [],
	width = parseInt(0.8 * window.innerWidth, 10),
	height = window.innerHeight;

function init() {
	canvasEl.width = width;
	canvasEl.height = height;
	initListeners();
	run();
}

function initListeners() {
	drawEl.addEventListener('click', run);
	inputIds.forEach(function(inputId) {
		var el = document.getElementById(inputId);
		el.addEventListener('change', run);
	});
}

function updateVals () {
	inputIds.forEach(function(inputId) {
		var el = document.getElementById(inputId);
		vals[inputId] = el.value;
	});
}

function syncLabelValues () {
	inputIds.forEach(function(inputId) {
		var el = document.getElementById(inputId + 'Value');
		el.innerHTML = vals[inputId];
	});
}

function run () {
	updateVals();
	syncLabelValues();
	draw();
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