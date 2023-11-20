// Crea una funzione che accetta due elementi del dom, uno e' il parent e l'altro e' un elemento che voglio sia aggiunto al parent come figlio.



// ================== Function ==============
function controllaSeDivisibile(numero, divisore) {
    if ( numero === divisore){
        return numero;
    } else if ( numero % divisore === 0 ){
        return true;
    } else {
        return false;
    }
    
};