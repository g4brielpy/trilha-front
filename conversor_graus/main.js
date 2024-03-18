import input from "readline-sync";

console.log("CONVERSOR DE CELSIUS PARA KELVIN: \n");

let celsius = input.question("Informe o valor em Celsius: ");
let kelvin = Number(celsius) + 273.15;

console.log(`${celsius}°C equivale a ${kelvin.toFixed(2)}K`);
