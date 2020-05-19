var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.beginPath();
context.arc(145, 80, 30, 0.7, 1.8 * Math.PI);
context.fillStroke = '#976F0F';
context.lineWidth = '9'
context.stroke();
context.beginPath();
context.arc(110, 80, 30, 2.5, 1.2 * Math.PI, true);
context.fillStroke = '#976F0F';
context.lineWidth = '9'
context.stroke();

context.font = '30px Arial';
context.fillText('CHANEL', 67, 140);
