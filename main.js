var canvasEl = document.getElementById('canvas'),
	context = canvasEl.getContext('2d'),
	width = 0.8 * window.innerWidth,
	height = window.innerHeight;

canvasEl.width = width;
canvasEl.height = height;

for (var y = 0; y < height; y++) {
	for (var x = 0; x < width; x++) {
		var id = context.createImageData(1, 1);
		var d = id.data;
		var rand = Math.random() * 255;
		d[0] = rand;
		d[1] = rand;
		d[2] = rand;
		d[3] = 255;
		context.putImageData(id, x, y);
	}
}
