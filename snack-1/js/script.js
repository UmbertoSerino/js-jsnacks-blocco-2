// creiamo un array vuoto
const arrayVuoto = []
// partiamo da 0
let number = 0;


while (number <= 50){
    let userNumber = parseInt(prompt("Dammi i tuoi numeri!!"));

    if (!isNaN (userNumber)){
        number += userNumber;
        arrayVuoto.push(userNumber);
    }
}

console.log(arrayVuoto, number);
