const numeroRandomUtente = parseInt(prompt(`Inserisci un numero da 1 a 5`));
console.log(`Numero scelto dall'utente ${numeroRandomUtente}`);

const min = 1
const max = 5
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomNum = getRandomNumber(min, max);
console.log(`Numero scelto dal pc ${randomNum}`);
if (numeroRandomUtente > 5 || numeroRandomUtente < 1) {
    alert(`Numero non valido`)
}

const a = numeroRandomUtente
const b = randomNum;
function sommaUtPc( a , b) {
    const somma = numeroRandomUtente + randomNum;
    // return numeroRandomUtente + randomNum;

    console.log(somma);
}


