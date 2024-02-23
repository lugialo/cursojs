export const nome = "José";
export const idade = 25;

export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

export function soma(x, y) {
  return x + y;
}

export { nome as default, sobrenome, idade, soma };
