// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


// Creo l'array
const teamsArray = [
    { "name": "Juventus", "points": 0, "takenFouls": 0 },
    { "name": "Inter", "points": 0, "takenFouls": 0 },
    { "name": "Milan", "points": 0, "takenFouls": 0 },
    { "name": "Roma", "points": 0, "takenFouls": 0 },
    { "name": "Napoli", "points": 0, "takenFouls": 0 }
];

// Genero numeri casuali (da 0 a 100) per "punti" e "falli subiti"
teamsArray.forEach(function (team) {
    team.points = Math.floor(Math.random() * 100);
    team.takenFouls = Math.floor(Math.random() * 100);
});

// Creo un nuovo array contenente solo i nomi delle squadre e i falli subiti
const teamsAndFoulsArray = teamsArray.map(function (team) {
    return { "name": team.name, "takenFouls": team.takenFouls };
});

// Stampo tutto in console
console.table(teamsAndFoulsArray);