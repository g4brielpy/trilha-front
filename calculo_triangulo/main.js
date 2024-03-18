import input from "readline-sync";

console.log("CALCULANDO A ÁREA DO TRIÂNGULO: \n");

let base = input.question("Informe a Base: ");
let altura = input.question("Informe a Altura: ");

let area = (base * altura) / 2;

console.log(`A área do triângulo é: ${area}`)