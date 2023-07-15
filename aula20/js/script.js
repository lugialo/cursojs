function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    
    // form.onsubmit = function(evento) {
    //     evento.preventDefault(); // O prevent default serve para prevenir o evento que aconteceria, no caso do formulário seria o submit do mesmo.
    //     alert(1);
    //     console.log('Foi enviado');
    // };

    const pessoas = [];
    let valorPessoas = {};

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        valorPessoas = {
            nome : nome.value,
            sobrenome : sobrenome.value,
            peso : peso.value,
            altura : altura.value

        }

        pessoas.push(valorPessoas);
        console.log(pessoas);
        resultado.innerHTML += `${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} <br>`

        nome.value = "";
        sobrenome.value = "";
        peso.value = "";
        altura.value = "";
    }
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();