// arguments = sustenta todos os argumentos enviados
// isso nao funciona em arrow function
function funcao(a, b, c) {
  // function declaration

  let total = 0;
  for (let argumento of arguments) {
    // for of arguments
    total += argumento; //soma e adiciona o valor
  }
  console.log(total, a, b, c);
}
funcao(1, 2, 3);

function funcao(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}
funcao(1, 2, 3); // 1 2 3 undefined undefined undefined, como nao foi inicializada, fica undefined

function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }

  console.log(acumulador);
}
conta("+", 0, 20, 30, 40, 50);

const conta2 = (...args) => {
  console.log(args);
};

conta("+", 0, 20, 30, 40, 50);
