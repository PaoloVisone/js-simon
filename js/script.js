// Seleziono gli elemnti del DOM

const numberList = document.getElementById("numbers-list");
const numberCountdown = document.getElementById("countdown");
const form = document.getElementById('answers-form');
const chois = document.querySelectorAll('.form-control');
const message = document.getElementById('message');
const instructions = document.getElementById('instructions');



// Funzione per il countdown

let second = 6;

countDown = setInterval(() => {

    if (second === 0) {
        clearInterval(countDown);
        // I numeri scompaiono
        numberList.className = "d-none";
        numberCountdown.className = "d-none";
        form.className = "d-block";
        instructions.innerText = "Inserisci tutti i numeri che ricordi (l'ordine non è importante)"

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

// controllo se almeno 1 dei numeri è correti o no e li salvo in un array poi li mostro al'utente

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let correctNumbers = [];
    let wrongNumbers = [];
    let userNumbers = [];

    // Prendo i numeri inseriti dall'utente

    userNumbers.push(chois[0].value);
    userNumbers.push(chois[1].value);
    userNumbers.push(chois[2].value);
    userNumbers.push(chois[3].value);
    userNumbers.push(chois[4].value);

    // Controllo se i numeri sono corretti

    for (let i = 0; i < userNumbers.length; i++) {
        if (randomNumber.includes(userNumbers[i])) {
            correctNumbers.push(userNumbers[i]);
        } else {
            wrongNumbers.push(userNumbers[i]);
        }
    }

    // Stampo i risultati

    if (correctNumbers.length === 0) {
        message.innerHTML = "Non hai indovinato nessun numero";
    } else {
        message.innerHTML = `Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers}`;
        message.className = "text-success text-center";
    }
});




