// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };
// console.log(pessoa.nome);

// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome, sobrenome, idade
//         // nome: nome,
//         // sobrenome: sobrenome,
//         // idade: idade
//     };
// }

// const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
// const pessoa2 = criaPessoa('Emanuele', 'Silva', 26);
// const pessoa3 = criaPessoa('Gabriel', 'Antonin', 23);

// console.log(pessoa2.nome)

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
        console.log(`A minha idade atual é: ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();