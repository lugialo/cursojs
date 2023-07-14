// IEEE 754-2008
let num1 = 0.7; // number
let num2 = 0.1; // number

console.log(num1.toString() + num2);
console.log(typeof null);

console.log(num1.toString(2)); // Representação binária (2)
console.log(num1.toFixed(2)); // Arredondar casas decimais

console.log(Number.isInteger(num2)); // No caso num2 é 2.5, então não é um número inteiro.
let temp = num1 * 'Ola';
console.log(Number.isNaN(temp));


// num1 += num2;
// num1 = Number(num1.toFixed(2));
// parseInt(num1);
// console.log(Number.isInteger(num1));
// // Ou então podemos fazer:

num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
console.log(num1);

console.log(Number.isInteger(num1));
