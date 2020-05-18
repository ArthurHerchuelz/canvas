var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

// Forme verte faite avec 2 rectangles
context.fillStyle = '#00A550';
context.fillRect(100,50,100,25);
context.fillRect(75,75,150,25);
// roue gauche
context.beginPath();
context.fillStyle = '#CECECE';
context.lineWidth ='1'; // largeur du contour
context.arc(87, 120, 20, 0, 2 * Math.PI); // formule pour créer un cercle
context.fill();
context.stroke();
context.closePath();
// roue droite
context.beginPath();
context.fillStyle = '#CECECE';
context.lineWidth ='1';
context.arc(212, 120, 20, 0, 2 * Math.PI);
context.fill();
context.stroke();
context.closePath();
