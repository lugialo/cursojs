// For in -> lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};
console.log(pessoa.nome);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// const frutas = ['Pera', 'Maçã', 'Uva'];

// for (let index in frutas){
//     console.log(frutas[index]);
// }