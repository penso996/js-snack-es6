// Creare un array di oggetti.
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.


// Creo l'array
const bikesArray = [
    { "name": "Specialized", "weight": 7.2 },
    { "name": "Canyon", "weight": 6.5 },
    { "name": "Scott", "weight": 8.1 },
    { "name": "Bianchi", "weight": 6.8 },
    { "name": "Trek", "weight": 7.2 },
];

// Creo una variabile globale nella quale setto il primo elemento dell'array come bici più leggera
let lightestBike = bikesArray[0];

// Itero ogni elemento dell'array e setto di volta in volta la bici più leggera confrontandole fra di loro
bikesArray.forEach(function (bike) {
    if (bike.weight < lightestBike.weight) {
        lightestBike = bike;
    }
});

// Stampo il risultato in console
console.log("La bici più leggera è la: " + lightestBike.name + ", con un peso di " + lightestBike.weight + " kg.");