// Jeito que eu fiz
// function resultadoImc() {
//   const form = document.querySelector(".form");
//   const divResultado = document.querySelector(".resultado");

//   function calculaImc(evento) {
//     evento.preventDefault();

//     const peso = Number(form.querySelector(".peso").value);
//     const altura = Number(form.querySelector(".altura").value);

//     const resultado = peso / altura ** 2;

//     if (peso <= 0 || isNaN(peso)) {
//       divResultado.innerHTML = `<p style="background-color: red;"> Peso inválido.</p>`
//     }
//     else if (altura <= 0 || isNaN(altura)){
//       divResultado.innerHTML = `<p style="background-color: red;"> Altura inválida.</p>`
//     }
//     else if (resultado < 18.5) {
//       divResultado.innerHTML = `<p>Seu IMC é ${resultado.toFixed(
//         2
//       )} (Abaixo do peso)</p>`;
//     } else if ((resultado >= 18) & (resultado <= 24.9)) {
//       divResultado.innerHTML = `<p>Seu IMC é ${resultado.toFixed(
//         2
//       )} (Peso normal) </p>`;
//     } else if ((resultado >= 25) & (resultado <= 29.9)) {
//       divResultado.innerHTML = `<p> Seu IMC é ${resultado.toFixed(
//         2
//       )} (Sobrepeso) </p>`;
//     } else if ((resultado >= 30) & (resultado <= 34.9)) {
//       divResultado.innerHTML = `<p> Seu IMC é ${resultado.toFixed(
//         2
//       )} (Obesidade grau 1)`;
//     } else if ((resultado >= 35) & (resultado <= 40)) {
//       divResultado.innerHTML = `<p> Seu IMC é ${resultado.toFixed(
//         2
//       )} (Obesidade grau 2)`;
//     } else if (resultado > 40) {
//       divResultado.innerHTML = `<p> Seu IMC é ${resultado.toFixed(
//         2
//       )} (Obesidade grau 3)`;
//     }

//     form.querySelector(".peso").value = "";
//     form.querySelector(".altura").value = "";
//   }
//   form.addEventListener("submit", calculaImc);
// }

// resultadoImc();

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
});

function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP () {
  const p = document.createElement('p');
  return p;
}

function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}

