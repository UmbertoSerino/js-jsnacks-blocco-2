// Chiedo all'utente un numero e genero attraverso una funzione un numero di quadrati equivalente al numero inserito dall'utente nel DOM, in qualsiasi forma. 

const userNumber = parseInt(prompt("Dammi un numero!"));
console.log(userNumber);


function createdSquare(number) {
    for (let index = 0; index < number; index++) {
        const squareItem = document.createdElement("div");
        squareItem.classList.add("square");
        return squareItem;
    }  
}

