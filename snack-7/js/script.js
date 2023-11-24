// Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

const zucchineList = [

    {   variety : "black", 
        weight : "1kg",
        length: "1m"
    },
    {   variety : "purple", 
        weight : "3kg", 
        length: "2m"
    },
    {   variety : "pink", 
        weight : "4kg", 
        length: "1m"
    },
    {   variety : "black", 
        weight : "5kg", 
        length: "1m"
    },
    {   variety : "dark", 
        weight : "4kg", 
        length: "1m"
    },
    {   variety : "gray", 
        weight : "2kg", 
        length: "1m"
    },
    {   variety : "magenta", 
        weight : "1.5kg", 
        length: "1m"
    },
    {   variety : "lime", 
        weight : "2kg", 
        length: "1m"
    },
    {   variety : "black", 
        weight : "3kg", 
        length: "1m"
    },
    {   variety : "black", 
        weight : "4kg", 
        length: "1m"
    }

];

let sumWeight = 0;

for (let index = 0; index < zucchineList.length; index++) {
    sumWeight += parseFloat(zucchineList[index].weight);
}
console.log(sumWeight);
