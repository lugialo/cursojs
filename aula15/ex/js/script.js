const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}`
texto.innerHTML += `<p>É Nan: ${Number.isNaN(numero)} </p>`
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)} </p>`
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}`
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)} </p>`