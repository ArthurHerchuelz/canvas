var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var toRadians = Math.PI / 180;
// toit maison
context.fillStyle = 'peru';
context.fillRect(100,100,100,100);
context.save();
  context.rotate(45 * Math.PI / 180);
  context.restore();
// Murs maison
context.fillStyle = 'lightblue';
context.fillRect(50,150,100,100);
// Porte
context.fillStyle = '#CACACA';
context.fillRect(85,210,30,40);
// fenetre gauche
context.fillStyle = '#CACACA';
context.fillRect(60,160,20,20);
// fenetre droite
context.fillStyle = '#CACACA';
context.fillRect(120,160,20,20);
