var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
// corps
context.beginPath();
context.moveTo(90, 100);
context.lineTo(200, 100);
context.quadraticCurveTo(210,110,200,120);
context.lineTo(170,120);
context.lineTo(170,200);
context.quadraticCurveTo(160,210,150,200);
context.lineTo(150,180);
context.quadraticCurveTo(145,170,140,180);
context.lineTo(140,200);
context.quadraticCurveTo(130,210,120,200);
context.lineTo(120,120);
context.lineTo(90,120);
context.quadraticCurveTo(80,110,90,100);
context.closePath();
context.fillStyle = '#976F0F';
context.fill();
// tete
context.beginPath();
context.arc(145, 80, 25, 0, 2 * Math.PI); // formule pour créer un cercle
context.closePath();
context.fillStyle = '#976F0F';
context.fill();
// yeux
context.beginPath();
context.arc(135, 75, 5, 0, 2 * Math.PI); 
context.closePath();
context.fillStyle = '#FFFFFF';
context.fill();
context.beginPath();
context.arc(155, 75, 5, 0, 2 * Math.PI);
context.closePath();
context.fillStyle = '#FFFFFF';
context.fill();
// sourcils
context.beginPath();
context.moveTo(130,65);
context.quadraticCurveTo(135,60,142,65);
context.strokeStyle = '#FFFFFF';
context.stroke();
context.beginPath();
context.moveTo(150,65);
context.quadraticCurveTo(155,60,162,65);
context.strokeStyle = '#FFFFFF';
context.stroke();
// bouche
context.beginPath();
context.moveTo(135,90);
context.quadraticCurveTo(145,95,155,90);
context.closePath();
context.strokeStyle = '#E02004';
context.stroke();
// boule de gomme
context.beginPath();
context.arc(145, 130, 5, 0, 2 * Math.PI);
context.closePath();
context.fillStyle = '#7A2976';
context.fill();
context.beginPath();
context.arc(145, 150, 5, 0, 2 * Math.PI);
context.closePath();
context.fillStyle = '#7A2976';
context.fill();
