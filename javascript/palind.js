// const parola1 = prompt(`Inserisci Parola1`);
// const parolaUtente2 = prompt(`Inserisci Parola2`);
// console.log(parolaUtente1, parolaUtente2);
// const reverseWordIntoString = str => str.split(" ").map(word => word.split("").reverse().join('')).join(" ")


const parola1 = "anna";
// const parola2 = "abcd";


// const output = {

//     [parola1]: reverseWordIntoString(parola1)
// }
// console.log(output);


// if(parola1 === output){
//     console.log(`La parola inserita e' palindroma`);
// }


function reverseString(string) {
    return string.split('').reverse().join('');

}
function palindCheck(parola1) {
    const risultato = parola1
    if (parola1 === reverseString(parola1)) {
        console.log(parola1);
    } else {
        console.log('Questa parola è palindroma');
    }
}
