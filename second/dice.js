var canvas = document.getElementById('diceCanvas');
var ctx = canvas.getContext('2d');
function drawDice(number) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(10, 10, 180, 180);
    ctx.stroke();
    ctx.fillStyle = '#000'; 
    switch(number) {
        case 1:
            drawDot(100, 100);
            break;
        case 2:
            drawDot(50, 50);
            drawDot(150, 150);
            break;
        case 3:
            drawDot(50, 50);
            drawDot(100, 100);
            drawDot(150, 150);
            break;
        case 4:
            drawDot(50, 50);
            drawDot(150, 50);
            drawDot(50, 150);
            drawDot(150, 150);
            break;
        case 5:
            drawDot(50, 50);
            drawDot(150, 50);
            drawDot(50, 150);
            drawDot(150, 150);
            drawDot(100, 100);
            break;
        case 6:
            drawDot(50, 40);
            drawDot(150, 40);
            drawDot(50, 100);
            drawDot(150, 100);
            drawDot(50, 160);
            drawDot(150, 160);
            break;
    }
    ctx.font = '30px Arial';
    ctx.fillStyle = '#000'; 
    ctx.textAlign = 'center';
    ctx.fillText(number, canvas.width / 2, canvas.height / 2);
}
function drawDot(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fill();
}
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        var randomNumber = rollDice();
        drawDice(randomNumber);
    }
});
drawDice(1);
