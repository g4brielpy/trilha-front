function selecionarFruta(frutas) {
  const quantidadeFrutas = frutas.length;
  const numeroSorteado = Math.floor(Math.random() * quantidadeFrutas);

  return frutas[numeroSorteado];
}

function letraValida(letra) {
  return /^[a-zA-Z]$/.test(letra) && letra.length == 1;
}

export { selecionarFruta, letraValida };
