function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") { 
    reject(false);
    return;
  }

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

// Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
  esperaAi("Promise 1", 3000),
  esperaAi("Promise 2", 1500),
  esperaAi("Promise 3", 1000),
];

Promise.race(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });


function baixarPagina() {
  const emCache = false;

  if(emCache) {
    return Promise.resolve('Página em cache');
  } else {
    return esperaAi('Baixei a página', 3000);
  }
}


baixarPagina()
.then(dadosPagina => {
  console.log(dadosPagina);
}).catch(e => console.log(e));