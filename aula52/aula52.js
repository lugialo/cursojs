const nome = 'Luiz'; // Escopo léxico

function falaNome() {
    const nome = 'João';
    console.log(nome);
}

function usaFalaNome() {
    falaNome();
}
usaFalaNome();
