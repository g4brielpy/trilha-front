import input from "readline-sync";
import listaDeFrutas from "./frutas.js";
import { selecionarFruta, letraValida } from "./forca.js";

function main() {
  const fruta = selecionarFruta(listaDeFrutas);
  const palavraOculta = fruta.split("").map(() => "_");
  palavraOculta[0] = fruta[0];

  let chances = 4;
  let letrasEscolidas = [fruta[0]];

  console.log("----- JOGO DA FORCA -----\n");
  console.log("Adivinhe o nome da fruta com " + fruta.length + " letras:");

  while (chances) {
    console.log("\nFruta: " + palavraOculta.join(""));
    const chute = input.question("Digite uma letra: ");
    let acerto = false;

    if (letraValida(chute) && !letrasEscolidas.includes(chute)) {
      for (const index in fruta) {
        letrasEscolidas.push(chute);

        if (fruta[index] == chute) {
          palavraOculta[index] = chute;
          acerto = true;
        }
      }

      if (!acerto) {
        chances--;
        console.log("OPÇÃO ERRADA! Você ainda tem " + chances + " chance(s)!");
      }
    } else {
      console.log("Valor inválido. Digite novamente!");
    }
    console.log(palavraOculta.join(""))

    if (palavraOculta.join("") == fruta) {
      console.log("\n----- VITÓRIA! -----");
      console.log("Você acertou o nome da fruta: " + fruta);
      console.log("-------------------------------------------");
      break;
    } else if (!chances) {
      console.log("\n----- VOCÊ PERDEU! -----");
      console.log("A fruta oculta era: " + fruta);
      console.log("-------------------------------------------");
    }
  }
}

main();
