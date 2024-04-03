// Projeto: comparação de salário e inflação;

// import input from "readline-sync";

const salarios = [
  { ano: 2010, salario: 510 },
  { ano: 2011, salario: 545 },
  { ano: 2012, salario: 622 },
  { ano: 2013, salario: 678 },
  { ano: 2014, salario: 724 },
  { ano: 2015, salario: 788 },
  { ano: 2016, salario: 880 },
  { ano: 2017, salario: 937 },
  { ano: 2018, salario: 954 },
  { ano: 2019, salario: 998 },
  { ano: 2020, salario: 1045 },
];

const inflacoes = [
  { ano: 2010, ipca: 5.91 },
  { ano: 2011, ipca: 6.5 },
  { ano: 2012, ipca: 5.84 },
  { ano: 2013, ipca: 5.91 },
  { ano: 2014, ipca: 6.41 },
  { ano: 2015, ipca: 10.67 },
  { ano: 2016, ipca: 6.29 },
  { ano: 2017, ipca: 2.95 },
  { ano: 2018, ipca: 3.75 },
  { ano: 2019, ipca: 4.31 },
  { ano: 2020, ipca: 4.52 },
];

function listarSalarios(lista_salarios) {
  for (let dado of lista_salarios) {
    let ano = dado.ano;
    let salario = dado.salario;

    console.log("Ano: ".padEnd(30, ".") + ano);
    console.log(
      "Salário: ".padEnd(30, ".") +
        `R$ ${salario.toFixed(2).replace(".", ",")} \n`
    );
  }
}

function listarInflacao(lista_inflacao) {
  for (dado of lista_inflacao) {
    let ano = dado.ano;
    let ipca = dado.ipca;

    console.log("Ano: ".padEnd(30, ".") + ano);
    console.log(
      "Inflação: ".padEnd(30, ".") + `${ipca.toFixed(2).replace(".", ",")}% \n`
    );
  }
}

function listarComparacaoSalarioInflacao(lista_salarios, lista_inflacao) {
  for (let i = 0; i < lista_salarios.length; i++) {
    let ano = lista_salarios[i].ano;
    let salario = lista_salarios[i].salario;
    let inflacao = lista_inflacao[i].ipca;
    let crescimento_salarial = 0;

    if (i != 0) {
      let salario_anterio = lista_salarios[i - 1].salario;
      let diferenca = salario - salario_anterio;
      crescimento_salarial = (diferenca / salario_anterio) * 100;
    }

    console.log("Ano: ".padEnd(30, ".") + ano);
    console.log(
      "Salário mínimo: ".padEnd(30, ".") +
        `R$ ${salario.toFixed(2).replace(".", ",")}`
    );
    console.log(
      "Crescimento salarial: ".padEnd(30, ".") +
        (crescimento_salarial != 0
          ? `${crescimento_salarial.toFixed(2).replace(".", ",")}%`
          : " -")
    );
    console.log(
      "Inflação IPCA: ".padEnd(30, ".") +
        `${inflacao.toFixed(2).replace(".", ",")}% \n`
    );
  }
}

function menu() {
  console.log("Escolha uma das alternativas: \n");
  console.log("1 - Listar os salários minímos de 2010 à 2020");
  console.log("2 - Listar o índice IPCA de 2010 à 2020");
  console.log(
    "3 - Comparação entre o percentual de aumento salarial e o IPCA \n"
  );
}

menu();
// let opcao = input.question("Digite o numero de sua escolha: ");
let opcao = "3";
switch (opcao) {
  case "1":
    listarSalarios(salarios);
    break;
  case "2":
    listarInflacao(inflacoes);
    break;
  case "3":
    listarComparacaoSalarioInflacao(salarios, inflacoes);
    break;
  default:
    console.log("Opção inválida!");
    break;
}
