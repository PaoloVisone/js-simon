// Seleziono gli elemnti del DOM

const numberList = document.getElementById("numbers-list");
const numberCountdown = document.getElementById("countdown");

// Funzione per il countdown

let second = 6;

countDown = setInterval(() => {

    if (second === 0) {
        clearInterval(countDown);
        ////////////////////////////
        ////////////////////////////
    } else {
        second = second - 1;
        numberCountdown.innerHTML = second;
    }
}, 1000)

// Funzione per numeri random

