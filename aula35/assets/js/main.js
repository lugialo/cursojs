const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]


const texto = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i ++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);


    tagCriada.innerText = (textoCriado);
    div.appendChild(tagCriada);
}

texto.appendChild(div);