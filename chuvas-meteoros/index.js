// PROJETO: chuva de meteoros - hemisfério sul

function formatarData(data) {
  let dataFatiada = data.split(" ");
  mesExtenso = {
    Jan: "Janeiro",
    Fev: "Fevereiro",
    Mar: "Março",
    Abr: "Abril",
    Mai: "Maio",
    Jun: "Junho",
    Jul: "Julho",
    Ago: "Agosto",
    Set: "Setembro",
    Out: "Outubro",
    Nov: "Novembro",
    Dez: "Dezembro",
  };

  let mes = mesExtenso[dataFatiada[0]];
  let dia = dataFatiada[1];

  return `${dia} de ${mes}`;
}

function formatarVelocidade(velocidade) {
  let velocidadeFatiada = velocidade.split(" ");

  let digito = velocidadeFatiada[0];
  let kmS = "quilômetros por segundo";

  return `${digito} ${kmS}`;
}

const titulo = "~~~~ chuva de meteoros - hemisfério sul ~~~~";
const chuvas_meteoros = [
  { nome: "Alfa Centaurídeos", pico: "Fev 8", velocidade: "56 km/s" },
  { nome: "Gama Normídeos", pico: "Mar 14", velocidade: "56 km/s" },
  { nome: "Pi Pupídeos", pico: "Abr 23", velocidade: "18 km/s" },
  { nome: "Eta Aquáridas", pico: "Mai 5", velocidade: "66 km/s" },
  { nome: "Alfa Capricornídeos", pico: "Jul 30", velocidade: "23 km/s" },
  { nome: "Delta Aquáridas do Sul", pico: "Jul 28", velocidade: "41 km/s" },
  { nome: "Piscis Austrinídeos", pico: "Jul 28", velocidade: "35 km/s" },
  { nome: "Fenícidas", pico: "Dez 6", velocidade: "18 km/s" },
  { nome: "Pupidas-Velidas", pico: "Dez 12", velocidade: "40 km/s" },
];

for (dados of chuvas_meteoros) {
  let nome = dados["nome"];
  let data = dados["pico"];
  let velocidade = dados["velocidade"];

  console.log(`\n\n${"Nome: ".padEnd(20, ".")}${nome}`);
  console.log(`${"Pico: ".padEnd(20, ".")}${formatarData(data)}`);
  console.log(
    `${"Velocidade: ".padEnd(20, ".")}${formatarVelocidade(velocidade)}`
  );
}
