var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
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
// toit maison
context.globalCompositeOperation = "destination-over";
context.fillStyle = 'peru';
context.fillRect(50,100,100,100);
context.translate( 100, 0 );
context.rotate(45 * Math.PI / 180);
context.fillStyle = 'peru';
context.fillRect(50,100,100,100);
// test
// ctx.save();
// ctx.rotate( rotationAmountInRadians );
// ctx.translate( -objectRotationCenterX, -objectRotationCenterY );
// ctx.drawImage( myImageOrCanvas, 0, 0 );
// ctx.restore();
