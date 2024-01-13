let nomeHeroi = "Diego";
let xp = 20000;

if (xp < 1000) {
  console.log("Ferro");
} else if (xp > 1000 && xp < 2000) {
  console.log("Bronze");
} else if (xp > 2000 && xp < 5000) {
  console.log("Prata");
} else if (xp > 5000 && xp < 7000) {
  console.log("Ouro");
} else if (xp > 7000 && xp < 8000) {
  console.log("Platina");
} else if (xp > 8000 && xp < 9000) {
  console.log("Ascendente");
} else if (xp > 9000 && xp < 10000) {
  console.log("Imortal");
} else if (xp >= 10000) {
  console.log("Radiante");
} else {
  console.log("XP inválido.");
}
