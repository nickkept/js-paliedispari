const parola1 = prompt(`Inserisci Parola1`);

/**Funzione che fa il reverse della parola, facendo lo split in lettere messe in un array per poi fare il reverse e rimetterle insieme
 * 
 * @param {*} string 
 * @returns 
 */
function reverseString(string) {
    return string.split('').reverse().join('');

}
/**Funzione che prende il parola scritta dall`utente e dopo aver fatto il reverse, controlla se la parola originale e` uguale al reverse e mi da il risultato
 * 
 * @param {Parola} parola1 
 * @returns risultato 
 */
function palindCheck(parola1) {
    if (parola1 === reverseString(parola1)) {
        return 'Questa parola è palindroma';
    }else{
        return 'Questa parola non è palindroma';
    }
}
const risultato = palindCheck(parola1);
console.log(risultato);