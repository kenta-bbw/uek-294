const canvasElement = document.getElementById('smiley');
const ctx = canvasElement.getContext('2d');

// Draw circle
ctx.beginPath();
ctx.arc(140, 140, 120, 0, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();

// Draw left eye
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(90, 100, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// Draw rigth eye
ctx.beginPath();
ctx.arc(190, 100, 5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// Draw mouth
ctx.beginPath();
ctx.lineWidth = 3;
ctx.arc(140, 150, 60, 0, Math.PI, false); 
ctx.stroke();
ctx.closePath();