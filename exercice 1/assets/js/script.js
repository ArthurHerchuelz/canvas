var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

// Murs maison
context.beginPath();
context.moveTo(50,250);
context.lineTo(150,250);
context.lineTo(150,150);
context.lineTo(50,150);
context.closePath();
context.fillStyle = 'lightblue';
context.fill();
// toit maison
context.beginPath();
context.moveTo(50,150);
context.lineTo(150,150);
context.lineTo(100,100);
context.closePath();
context.fillStyle = 'peru';
context.fill();
// Porte
context.beginPath();
context.lineTo(85,250);
context.lineTo(115,250);
context.lineTo(115,210);
context.lineTo(85,210);
context.closePath();
context.fillStyle = '#CACACA';
context.fill();
// fenetre gauche
context.beginPath();
context.lineTo(60,160);
context.lineTo(80,160);
context.lineTo(80,180);
context.lineTo(60,180);
context.closePath();
context.fillStyle = '#CACACA';
context.fill();
// fenetre droite
context.beginPath();
context.lineTo(140,160);
context.lineTo(140,180);
context.lineTo(120,180);
context.lineTo(120,160);
context.closePath();
context.fillStyle = '#CACACA';
context.fill();
