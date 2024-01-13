function contadorDeVitorias(vitorias, derrotas) {
  let somatoria = vitorias - derrotas;
  if (somatoria < 0) {
    somatoria = 0;
  }
  return somatoria;
}

function contadorDeLevel(vitorias, derrotas) {
  let level;
  let resultadoVitoria = contadorDeVitorias(vitorias, derrotas);

  if (resultadoVitoria > 0 && resultadoVitoria < 10) {
    level = "Ferro";
  } else if (resultadoVitoria > 10 && resultadoVitoria <= 20) {
    level = "Bronze";
  } else if (resultadoVitoria > 20 && resultadoVitoria <= 50) {
    level = "Prata";
  } else if (resultadoVitoria > 50 && resultadoVitoria <= 80) {
    level = "Ouro";
  } else if (resultadoVitoria > 80 && resultadoVitoria <= 90) {
    level = "Diamante";
  } else if (resultadoVitoria > 90 && resultadoVitoria <= 100) {
    level = "Lendário";
  } else if (resultadoVitoria > 100) {
    level = "Imortal";
  } else {
    level = "Desconhecido";
  }

  return level;
}

const vitoriaJogador = 1678;
const derrotaJogador = 800;

const resultadoLevel = contadorDeLevel(vitoriaJogador, derrotaJogador);
const resultadoVitorias = contadorDeVitorias(vitoriaJogador, derrotaJogador);

console.log(
  `O Herói tem saldo de ${resultadoVitorias} vitórias e está no nível ${resultadoLevel}.`
);
