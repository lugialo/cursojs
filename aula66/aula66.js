// Dobre os números
//
const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 11, 15, 22];

const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 52 },
    { nome: 'José', idade: 43 },
    { nome: 'Bruno', idade: 22 },
    { nome: 'Maria', idade: 25 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 29 },
]

const nome = pessoas.map(pessoa => pessoa.nome);
console.log(nome);

const idades = pessoas.map(obj => ({idade: obj.idade}));
console.log(idades);

const comIds = pessoas.map((obj, indice) => ({ indice, ...obj }));

console.log(comIds);

