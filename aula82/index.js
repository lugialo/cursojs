class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + " já ligado.");
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + " já desligado.");
      return;
    }

    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome); // Chama o construtor da classe pai
    this.cor = cor;
    this.modelo = modelo;
  }
}

const s1 = new Smartphone("nokia tijolasso", "preto", "inquebrável");
console.log(s1);
