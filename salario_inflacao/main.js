// Projeto: comparação de salário e inflação;

import input from "readline-sync";

function menu() {
  console.log("Escolha uma das alternativas: \n");
  console.log("1 - Listar os salários minímos de 2010 à 2020");
  console.log("2 - Listar o índice IPCA de 2010 à 2020");
  console.log(
    "3 - Comparação entre o percentual de aumento salarial e o IPCA \n"
  );
}

menu();
let opcao = input.question("Digite o numero de sua escolha: ");
switch (opcao) {
  case "1":
    console.log("1");
    break;
  case "2":
    console.log("2");
    break;
  case "3":
    console.log("3");
    break;
  default:
    console.log("Opção inválida!");
    break;
}
