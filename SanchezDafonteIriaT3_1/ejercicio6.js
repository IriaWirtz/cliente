const prompt = require('prompt-sync')();

const matriz = [
    prompt("Introduce un número: "),
    prompt("Introduce un número: "),
    prompt("Introduce un número: "),
    prompt("Introduce un número: "),
    prompt("Introduce un número: "),
    prompt("Introduce un número: "),
    prompt("Introduce un número: "),
    prompt("Introduce un número: "),
    prompt("Introduce un número: "),
    prompt("Introduce un número: ")
];

const no_reps = [];

for (let i = 0; i < matriz.length; i++) {
    if (no_reps.includes(matriz[i])) {
        no_reps.splice(i, 1);
    }
    else {
        no_reps.unshift(matriz[i]);
    }
}

console.log(no_reps);