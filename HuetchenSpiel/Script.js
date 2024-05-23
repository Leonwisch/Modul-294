var ballPosition = 1;
var attempts = 0;

function checkCup(cupNumber) {
    if (cupNumber === ballPosition) {
        document.getElementById("cup" + cupNumber).innerHTML = '<img src="./image/cup-open-ball.png" class="cup">';
        alert("Sie haben den Ball gefunden!");
        attempts = 0;
    } else {
        attempts++;
        document.getElementById("cup" + cupNumber).innerHTML = '<img src="./image/cup-open.png" class="cup">';
    }
    document.getElementById("score").innerHTML = "Fehlversuche: " + attempts;
}

function shuffleCups() {
    ballPosition = Math.floor(Math.random() * 3) + 1;
    for (var i = 1; i <= 3; i++) {
        document.getElementById("cup" + i).innerHTML = '<img src="./image/cup.png" class="cup">';
    }
}