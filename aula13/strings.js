// Strings são indexadas
//               01234567
//              "Um texto"
let umaString = "O rato roeu a roupa do rei de Roma.";

console.log(umaString);
console.log(umaString[-1]);
console.log(umaString[8]);

console.log(umaString.charAt(8));

console.log(umaString.concat(' em', ' um', ' lindo dia.')); // É melhor usar Template Strings.
console.log(umaString + ' em um lindo dia.')
console.log(`${umaString} em um lindo dia.`)

console.log(umaString.indexOf('texto')); // Expressões regulares
console.log(umaString.lastIndexOf('o'));
console.log(umaString.match(/[a-z]/g)) //A flag G indica uma correspondência global.
console.log(umaString.search(/x/));
console.log(umaString.replace('O', 'Outro'));
console.log(umaString.replace(/r/g, '#'));
console.log(umaString.length);
console.log(umaString.slice(2, 6)); //Também podem ser colocados números negativos.

console.log(umaString.slice(-5, -1));
console.log(umaString.substring(umaString.length - 5, umaString.length - 1));

console.log(umaString.split(' ', 3));

console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
