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
