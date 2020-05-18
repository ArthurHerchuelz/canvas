var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.fillStyle = '#00A550';
context.fillRect(100,50,100,25);
context.fillRect(75,75,150,25);


context.beginPath();
context.fillStyle = '#CECECE';
context.lineWidth="1";
context.arc(87, 120, 20, 0, 2 * Math.PI);
context.fill();
context.stroke();
context.closePath();

context.beginPath();
context.fillStyle = '#CECECE';
context.lineWidth="1";
context.arc(212, 120, 20, 0, 2 * Math.PI);
context.fill();
context.stroke();
context.closePath();
