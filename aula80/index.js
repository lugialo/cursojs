class Pessoa {
  constructor(nome, sobrenome) {
    // Classes
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando...`);
  }

  comer() {
    console.log(`${this.nome} está comendo...`);
  }

  beber() {
    console.log(`${this.nome}  está bebendo...`);
  }
}

const p1 = new Pessoa("Gabriel", "Antonin");
