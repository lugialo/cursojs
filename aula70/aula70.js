//Revisão de objetos

const pessoa1 = new Object(); // Método construtor
pessoa1.nome = "Luiz";
pessoa1.sobrenome = "Otávio";
pessoa1.idade = 30;

delete pessoa1.nome;
console.log(pessoa1);

const pessoa = {
  // Método literal
  nome: "Gabriel",
  sobrenome: "Antonin",
};

pessoa1.falarNome = function () {
  return `${this.nome} está falando seu nome`; // Podemos usar this pra referenciar o objeto
};

pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());

Object.freeze(pessoa1); // "Congela" o valor do objeto, não podendo ser alterado.
