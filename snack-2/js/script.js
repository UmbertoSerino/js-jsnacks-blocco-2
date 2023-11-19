// Generatore di "nomi cognomi" casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da questi due array distinti vuole generare una falsa lista di invitati con nome e cognome.

// generiamo un array con dei nomi
const names = ["Alfa", "Beta", "Gamma"];
// generiamo un altro array con dei cognomi
const surnames = ["Delta", "Omega", "Epsilon"];
// generiamo un array vuoto dove inseriremo po una lista random 
const secretList = [];
// potremmo usare un ciclo for

// ci creiamo un ciclo for, che va avanti finche' non raggiunge lo stesso numero dell'array names (o suernames) che avanza di 1
for (let i = 0; i < names.length; i++){
    // ci creiamo una costante per calcolare i nomi randomici presi dalla costante names per il numero dell'array names
    let randomNames = names[Math.floor(Math.random() * names.length)];
    // facciamo la stessa cosa per i cognomi
    let randomSurnames = surnames[Math.floor(Math.random() * surnames.length)];
    // ci creiamo una costante dove andiamo a prendere i nomi ed i cognomi randomici creati in precedenza per unirli.. aggiungiamo anche uno spazio tra loro con ... + "" +...
    let completeList = randomNames + " " + randomSurnames;
    // prendiamo la lista randomica appena creata e la inseriamo nell'array vuoto
    secretList.push(completeList);
}

console.log(secretList);

// con ciclo while
// possiamo usare lo stesso procedimento del ciclo for, inserendo pero' all'inizio una costante con il numero di volte che deve eseguire questa operazione

// let i = 0;

// while ( i < names.length){
    // ci creiamo una costante per calcolare i nomi randomici presi dalla costante names per il numero dell'array names
    // let randomNames = names[Math.floor(Math.random() * names.length)];
    // facciamo la stessa cosa per i cognomi
    // let randomSurnames = surnames[Math.floor(Math.random() * surnames.length)];
    // ci creiamo una costante dove andiamo a prendere i nomi ed i cognomi randomici creati in precedenza per unirli.. aggiungiamo anche uno spazio tra loro con ... + "" +...
    // let completeList = randomNames + " " + randomSurnames;
    // prendiamo la lista randomica appena creata e la inseriamo nell'array vuoto
//     secretList.push(completeList);

//     i++;
// }

// console.log(secretList);
