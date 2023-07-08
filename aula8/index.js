/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.9259259259254
Luiz Otávio nasceu em 1980
*/

const nome = 'Gabriel'
const sobrenome = 'Antonin'
const idade = 18;
const peso = 60;
const altura = 1.80;
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2023-idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg \ntem ${altura} de altura e seu IMC é de: ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);