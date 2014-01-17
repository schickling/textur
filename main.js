var canvasEl = document.getElementById('canvas'),
	context = canvasEl.getContext('2d');

canvasEl.style.width = 0.8 * window.innerWidth;
canvasEl.style.height = window.innerHeight;


// test
context.fillStyle = '#FF0000';
context.fillRect(0,0,150,75);