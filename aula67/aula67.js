// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (Map)
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22];

// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//     if (valor % 2 === 0) acumulador.push(valor);
//     return acumulador;
// }, []);
// console.log(total);

const total = numeros.reduce(function (acumulador, valor, indice, array) {
  acumulador.push(valor * 2);
  return acumulador;
}, []);
console.log(total);

// Retorne a pessoa mais velha

const pessoas = [
  { nome: "Luiz", idade: 52 },
  { nome: "José", idade: 43 },
  { nome: "Bruno", idade: 22 },
  { nome: "Maria", idade: 25 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 29 },
];

const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
});
console.log(maisVelha);
