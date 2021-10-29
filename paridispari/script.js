// Consegna
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// Passi logici:
// chiedo all'utente se punta su pari o dispari
// chiedo all'utente di inserire un numero da 1 a 5
// genero un numero random da 1 a 5 da assegnare al computer
// faccio la somma dei due numeri
// capisco se il numero è pari o dispari
// se l'esito è uguale alla puntata dell'utente, l'utente vince
// altrimenti vince il computer


// chiedo all'utente se punta su pari o dispari
const puntata = prompt("Su cosa vuoi puntare, pari o dispari?");
console.log("puntata dell'utente:", puntata);

// chiedo all'utente di inserire un numero da 1 a 5
const numUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log("numero dell'utente:", numUtente);

// genero un numero random da 1 a 5
const numComputer = numeroRandom(1, 5);
console.log("numero del computer:", numComputer);

// faccio la somma dei due numeri
const somma = numUtente + numComputer;

// capisco se il numero è pari o dispari
const risultato = pariDispari(somma);
console.log("la somma dei due numeri è", risultato);

if (risultato === puntata) {

    // se l'esito è uguale alla puntata dell'utente, ha vinto
    console.log("L'utente vince.");
} else {

    // altrimenti vince il computer
    console.log("Il computer vince.");
}



// funzioni

function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pariDispari(numero) {
    if (numero % 2) {
        return "dispari";
    } else {
        return "pari";
    }
}