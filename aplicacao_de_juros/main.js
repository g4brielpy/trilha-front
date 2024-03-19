// Valor da dívida: user informar
// Tempo de vencimento do boleto: user informar
// Taxa de juros: 10% p/ mais de 15 dias de atraso, caso contrário, 5%

import input from "readline-sync";

// -- APLICAÇÃO DE JUROS --
console.log("\nAPLICAÇÃO DE JUROS\n");

let controle = true;
let valorDevido, tempoVencimento, taxaJuros, valorComJuros;

while (controle) {
  try {
    valorDevido = Number(input.question("Informe o valor devido: R$ "));
    tempoVencimento = Number(
      input.question(
        "Informe a quantidade de dias desde o vencimento do boleto: "
      )
    );
    taxaJuros = tempoVencimento > 15 ? 0.1 : 0.05;
    valorComJuros = valorDevido + valorDevido * taxaJuros;
    controle = false;
  } catch {
    console.log("Digite valores válidos!");
  }
}

console.log(`\nValor original da dívida: R$ ${valorDevido.toFixed(2)}`);
console.log(`Dias atrasados: ${tempoVencimento ? tempoVencimento : 1}`);
console.log("Taxa de juros", taxaJuros == 0.1 ? "10%" : "5%");
console.log(`Valor total com juros: R$ ${valorComJuros.toFixed(2)}`);
