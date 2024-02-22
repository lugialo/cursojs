/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {
  nome: "Caneca",
  preco: 1.8,
};

// const outraCoisa = {...produto, material: 'porcelana'};
const caneca = Object.assign({}, produto, { material: "porcelana" });

outraCoisa.nome = "Outro nome";
outraCoisa.preco = 2.5;
console.log(produto);
console.log(outraCoisa);
