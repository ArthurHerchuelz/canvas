var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.beginPath();
context.moveTo(50, 100);
context.lineTo(90,100);
context.lineTo(70,150);
context.closePath();
context.fillStyle = '#AA6522';
context.fill();

context.beginPath();
context.moveTo(50, 100);
context.quadraticCurveTo(75, 50, 90,100);
context.fillStyle ='#8A0908';
context.fill();
