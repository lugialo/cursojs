function retornaFuncao() {
  // Closure = habilidade da função de acessar seu escopo léxico
  const nome = "Luiz";
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao();
console.log(funcao());
