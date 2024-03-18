import input from "readline-sync";

console.log("CONVERSOR DE MILHAS PARA QUILOMÊTROS: \n");

let milhas = input.question("Informe o valor em Milhas: ");
let km = milhas / 0.62137;

console.log(`${milhas}Mi equivale a ${km.toFixed(2)}Km`);
