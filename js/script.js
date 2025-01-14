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

// Genero numeri random

// Creo 5 numeri
let num1 = Math.round(Math.random() * 50 + 1);
let num2 = Math.round(Math.random() * 50 + 1);
let num3 = Math.round(Math.random() * 50 + 1);
let num4 = Math.round(Math.random() * 50 + 1);
let num5 = Math.round(Math.random() * 50 + 1);

// console.log(num1, num2, num3, num4, num5);

// Li salvo in un array
let randomNumber = [num1, num2, num3, num4, num5];

let items = '';

// console.log(items);

// Iterazione di numeri casuali
for (let i = 0; i < randomNumber.length; i++) {
    items += `<li>${randomNumber[i]}</li>`;
}

// Li stampo in html
numberList.innerHTML = items;



