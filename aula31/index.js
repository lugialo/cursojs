// const verdadeira = true

// // Let tem escopo de bloco { ... bloco}
// // Var só tem escopo de função

// let nome = 'Luiz'; // criando
// var nome2 = 'Luiz';

// var nome2 = 'Otávio'; // Redeclarada
// console.log(nome, nome2)

// if (verdadeira) {
//     let nome = 'Otávio'; // criando
//     // console.log(nome, nome2);

//     if (verdadeira) {
//         let nome = 'Outra coisa';
//         console.log(nome, nome2);
//     }
// }
function falaOi (oi) {
    console.log(`${oi} amigo`);
}

falaOi(5);