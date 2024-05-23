//neuveröffentlichungen
const neu = document.querySelectorAll('.games')[0].children;
console.log(neu);

//der zweite top Seller
const secondTopSeller = document.querySelectorAll('.games')[1].querySelectorAll('li')[1];
console.log(secondTopSeller);


//letzte kostenlose spiel
const kostenlose = document.querySelectorAll('.games')[2];
const letzterkostenlose = kostenlose.querySelectorAll('li')[3];


//alle listenelemente bestseller
const topSeller = document.querySelectorAll('.games')[1];

//alle h1
let h1 = document.getElementsByTagName("h1");
console.log(h1);
//alle sale
let sale = document.getElementsByClassName("sale");
console.log(sale);

//game of the day
let gameOfDay = document.querySelector("#game-of-the-day");
console.log(gameOfDay);
