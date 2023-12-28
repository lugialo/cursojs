// Aula 49 -- As várias maneiras de declarar uma função em JavaScript.

// Declaração de função (Function hoisting)

falaOi();
function falaOi() {
    console.log('Oie');
}

// First-class objects (Objetos de primeira classe)
// Function expression

const souUmDado = function() {
    console.log('Sou um dado.');
};

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo.');
}
executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
}
funcaoArrow();

//dentro de um objeto
const obj = {
    falar: function() {
        console.log('Estou falando...');
    }
}

obj.falar();




