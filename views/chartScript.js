var canvas = document.getElementById('myCanvas1');
var context = canvas.getContext('2d');

function getAmount(id) {
    var total = parseInt(document.getElementById("total").innerHTML);
    var amount = parseInt(document.getElementById(id).innerHTML);
    return (amount / total)*100;
}

//Answered A
var aHeight = 100;
var aX = 10;
context.beginPath();
context.rect(aX, 150 - getAmount("q1a"), 50, aHeight);
context.fillStyle = 'green';
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = 'black';
context.font = '16pt Calibri';
context.fillText('A', aX+10, aHeight-60);

//Answered B
var bHeight = 100;
var bX = 70;
context.beginPath();
context.rect(bX, 150 - getAmount("q1b"), 50, 100);
context.fillStyle = 'yellow';
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = 'black';
context.font = '16pt Calibri';
context.fillText('B', bX+10, bHeight-60);

//Answered C
var cHeight = 100;
var cX = 130;
context.beginPath();
context.rect(cX, 150 - getAmount("q1c"), 50, 100);
context.fillStyle = 'red';
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = 'black';
context.font = '16pt Calibri';
context.fillText('C', cX+10, cHeight-60);

//Answered D
var dHeight = 100;
var dX = 190;
context.beginPath();
context.rect(dX, 150 - getAmount("q1d"), 50, 100);
context.fillStyle = 'blue';
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = 'black';
context.font = '16pt Calibri';
context.fillText('D', dX+10, dHeight-60);

var canvas = document.getElementById('myCanvas2');
var context = canvas.getContext('2d');

//Answered A
var aHeight = 100;
var aX = 10;
context.beginPath();
context.rect(aX, 150 - getAmount("q2a"), 50, aHeight);
context.fillStyle = 'green';
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = 'black';
context.font = '16pt Calibri';
context.fillText('A', aX+10, aHeight-60);

//Answered B
var bHeight = 100;
var bX = 70;
context.beginPath();
context.rect(bX, 150 - getAmount("q2b"), 50, 100);
context.fillStyle = 'yellow';
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = 'black';
context.font = '16pt Calibri';
context.fillText('B', bX+10, bHeight-60);

//Answered C
var cHeight = 100;
var cX = 130;
context.beginPath();
context.rect(cX, 150 - getAmount("q2c"), 50, 100);
context.fillStyle = 'red';
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = 'black';
context.font = '16pt Calibri';
context.fillText('C', cX+10, cHeight-60);

//Answered D
var dHeight = 100;
var dX = 190;
context.beginPath();
context.rect(dX, 150 - getAmount("q2d"), 50, 100);
context.fillStyle = 'blue';
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = 'black';
context.font = '16pt Calibri';
context.fillText('D', dX+10, dHeight-60);

var canvas = document.getElementById('myCanvas3');
var context = canvas.getContext('2d');

//Answered A
var aHeight = 100;
var aX = 10;
context.beginPath();
context.rect(aX, 150 - getAmount("q3a"), 50, aHeight);
context.fillStyle = 'green';
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = 'black';
context.font = '16pt Calibri';
context.fillText('A', aX+10, aHeight-60);

//Answered B
var bHeight = 100;
var bX = 70;
context.beginPath();
context.rect(bX, 150 - getAmount("q3b"), 50, 100);
context.fillStyle = 'yellow';
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = 'black';
context.font = '16pt Calibri';
context.fillText('B', bX+10, bHeight-60);

//Answered C
var cHeight = 100;
var cX = 130;
context.beginPath();
context.rect(cX, 150 - getAmount("q3c"), 50, 100);
context.fillStyle = 'red';
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = 'black';
context.font = '16pt Calibri';
context.fillText('C', cX+10, cHeight-60);

//Answered D
var dHeight = 100;
var dX = 190;
context.beginPath();
context.rect(dX, 150 - getAmount("q3d"), 50, 100);
context.fillStyle = 'blue';
context.fill();
context.lineWidth = 2;
context.strokeStyle = 'black';
context.stroke();
context.fillStyle = 'black';
context.font = '16pt Calibri';
context.fillText('D', dX+10, dHeight-60);






