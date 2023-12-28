let varA = "A";
let varB = "B";
let varC = "C";
// const varExtra = varC;
//A B C
//B C A
// varExtra = varA;
// varA = varB;
// varB = varC;
// varC = varExtra;
// Maneira antiga de se fazer

[varA, varB, varC] = [varB, varC, varA];

console.log(varA + " " + varB + " " + varC);
