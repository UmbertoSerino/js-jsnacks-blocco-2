// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


const requiredFirstWord = prompt("Dammi un nome!");
const requiredSecondWord = prompt("Dammi un altro nome!");

// se il risultato della funzione di word è positivo, e quindi uguali eseguo il primo if, altrimenti non entra nella prima funzione ma nelle altre due
if (word (requiredFirstWord, requiredSecondWord)){
    console.log(requiredFirstWord, requiredSecondWord)
} else if (requiredFirstWord.length > requiredSecondWord.length){
    console.log(requiredFirstWord);
} else {
    console.log(requiredSecondWord);
}


// ================== Function ==============

function word(firstWord, secondWord) {
    if (firstWord.length == secondWord.length){
        return true;
    } else {
        return false;
    } 
};
