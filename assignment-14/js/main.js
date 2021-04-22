var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// first line
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

//second line
ctx.moveTo(200, 100);
ctx.lineTo(100, 200);
ctx.stroke();

// third line
ctx.moveTo(0, 200);
ctx.lineTo(200, 300);
ctx.stroke();

//top circle
ctx.beginPath();
ctx.arc(200, 100, 40, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

//second circle
ctx.beginPath();
ctx.arc(200, 300, 40, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();
