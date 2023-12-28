//               0       1        2      Os arrays são indexados dessa maneira.
const alunos = ['Luiz', 'Maria', 'João'];


//Isso pode

const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]
 
//Isso NÃO pode

const array = [1, 2, 3, 4, 5];
array = 'Legal'; // Assignment to constant variable.

console.log(alunos);

console.log(alunos instanceof Array); // Para descobrir se algo é um array

//console.log(alunos.slice(0, -2));
//delete alunos[1] // Fazendo desse jeito, o índice também será removido.
//const removido = alunos.pop(); // Remove o último índice
//const removido = alunos.shift(); // Remove o primeiro índice
//alunos.unshift('Luiza'); // Adiciona no começo
//alunos.unshift('Fábio'); // Adiciona no começo
//alunos.push('Luiza'); // Adiciona no fim.
//alunos.push('Fábio'); 
//alunos[alunos.length] = 'Luiza'; //Adiciona no fim
//alunos[alunos.length] = 'Fabio'; // Adiciona no fim
//alunos[alunos.length] = 'Luana'; // Adiciona no fim
//alunos[0] = 'Eduardo'; // Adiciona no indice específico
//alunos[3] = 'Luiza';
//console.log(alunos);
//console.log(alunos[0]);
//console.log(alunos[2]);