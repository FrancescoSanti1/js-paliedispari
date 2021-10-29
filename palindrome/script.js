// Consegna
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.
// Dare l’output relativo.

// chiedo all'utente di inserire una parola
const parola = prompt("Inserisci una parola per verificare se è palindroma");

// salvo la lunghezza della parola inserita dall'utente
const lunghezza = parola.length;
// console.log(lunghezza);

parolaPalindroma(parola, lunghezza);


function parolaPalindroma(parolaInserita, numCaratteri) {

    // dichiaro la variabile flag che mi serve per sapere se la parola è palindroma
    let lettereDiverse = false;

    // scorro tutti i caratteri della parola, fino a metà
    for (let i = 0; i < (numCaratteri / 2); i++) {

        // confronto la prima con l'ultima, la seconda con la penultima, e così via
        if (parolaInserita[i] !== parolaInserita[(numCaratteri - 1) - i]) {
    
            // se trovo due lettere diverse tra loro, modifico la variabile flag
            lettereDiverse = true;
        }
    }

    // finito il controllo, se la mia flag è rimasta invariata, la parola è palindroma
    // altrimenti non lo è
    if (lettereDiverse) {
        console.log("La parola inserita NON è palindroma");
    } else {
        console.log("La parola inserita è palindroma");
    }
}