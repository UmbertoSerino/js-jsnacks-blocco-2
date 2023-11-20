// Crea una funzione che accetta due numeri, se il primo e' divisibile per il secondo, allora ritorna vero, altrimenti ritorna falso. Micro bonus: se sono uguali ritorna il numero.

const wrapperElement = document.querySelector (".wrapper");
const newElement = document.createElement ("div");
newElement.innerHTML = "Gina va in montagna";

function addElementToParent(elementToAdd, parentElement) {
    parentElement.appendChild(elementToAdd);
}

addElementToParent(newElement, wrapperElement);