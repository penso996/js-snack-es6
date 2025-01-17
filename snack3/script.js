// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.


// Creo gli argomenti
const array = ["uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto"];
const a = 3;
const b = 6;

// Genero la funzione
function extractArrayValues(chosenArray, valueA, valueB) {
    return chosenArray.slice(valueA, valueB);
}

// Creo un nuovo array con la funzione
const newArray = (extractArrayValues(array, a, b));

// Mostro a schermo
console.table(newArray);