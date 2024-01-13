class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "usou sua magia.";
        break;
      case "guerreiro":
        ataque = "usou sua espada.";
        break;
      case "monge":
        ataque = "usou artes marciais.";
        break;
      case "ninja":
        ataque = "usou sua shuriken.";
        break;
      default:
        ataque = "usou um ataque indefinido.";
    }

    return `O Herói chamado ${this.nome}, que é um ${this.tipo}, ${ataque}`;
  }
}

const heroiSelecionado = new Heroi("Mário", 27, "mago");
console.log(heroiSelecionado.atacar());
