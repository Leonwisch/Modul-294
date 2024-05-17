function Hallo(){
let name = prompt("Please enter your name:");
let d = new Date();
let hour = d.getHours();
if (hour < 12) {
    alert("Good Morning, " + name + "!");
} else if (hour => 12) {
    alert("Good Day, " + name + "!");
}else{
    alert("Good Night, " + name + "!");
}
}

function guessNumber() {
    let randomNumber = Math.floor(Math.random() * 100);
    let guessedNumber;
    do {
        guessedNumber = prompt("Guess a Number between 0 and 100: ");
        if (guessedNumber > randomNumber) {
            alert("Wrong Number. Random number was lower");
        } else if (guessedNumber < randomNumber) {
            alert("Wrong Number. Random number was higher");
        }
    } while (guessedNumber != randomNumber);
    alert("Guessed Correct");
}
