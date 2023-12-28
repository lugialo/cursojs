const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
function mostraHora(segundos) {
  let data = new Date(segundos * 1000);
  

  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  })

}

iniciar.addEventListener('click', function(event) {
   relogio.classList.remove('pause');
   iniciar.innerHTML = 'Iniciar';
   timer = setInterval(function () {
     segundos++;
     relogio.innerHTML = mostraHora(segundos);
    
   }, 1000);
 })

 pausar.addEventListener('click', function(event) {
   clearInterval(timer);
  relogio.classList.add('pause');
  iniciar.innerHTML = 'Continuar';
 })

 zerar.addEventListener('click', function(event) {
  clearInterval(timer);
  segundos = 0;
   relogio.innerHTML = '00:00:00';
})

document.addEventListener('click', function(event){
  const el = e.target;
  if(el.classList.contains('iniciar')){
    
    relogio.classList.remove('pause');
    iniciar.innerHTML = 'Iniciar';
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = mostraHora(segundos);
   
    }, 1000);

  if (el.classList.contains('pausar')) {
    clearInterval(timer);
    relogio.classList.add('pause');
    iniciar.innerHTML = 'Continuar';
  }

  if (el.classList.contains('zerar')) {
    clearInterval('timer');
    segundos = 0;
    relogio.innerHTML = '00:00:00';
  }
  }});