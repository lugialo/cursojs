// function Calculadora() {                                    É possível fazer dessa maneira
//     this.display = document.querySelector('.display');
//     this.btnClear = document.querySelector('.btn-clear');
//     this.apagaUmBtn = document.querySelector('.btn-del');

//     this.clearDisplay = function(){
//         this.display.value = '';
//     };

//     this.apagaUm = function() {
//         this.display.value = this.display.value.slice(0, -1);
//     };

//     this.pressionaEnter = function() {
//         this.display.addEventListener('keyup', e => {
//             if (e.keyCode === 13) {
//                 this.realizaConta();
//             }
//         });
//     };

//     this.realizaConta = function() {
//         let conta = this.display.value;

//         try {
//             conta = eval(conta);

//             if(!conta && conta !== 0) {
//                 alert('Conta inválida!');
//                 return;
//             }

//             this.display.value = String(conta);
//         } catch(e) {
//             alert('Conta inválida!');
//             return;
//         }
//     };

//     this.inicia = function() {
//         this.cliqueBotoes();
//         this.pressionaEnter();
//     };

//     this.cliqueBotoes = () => {
//         document.addEventListener('click', e => {
//             const el = e.target;

//             if (el.classList.contains('btn-num')) {
//                 this.btnParaDisplay(el.innerText);
//             }

//             if(el.classList.contains('btn-clear')) {
//                 this.clearDisplay();
//             }

//             if(el.classList.contains('btn-del')) {
//                 this.apagaUm();
//             }

//             if(el.classList.contains('btn-eq')) {
//                 this.realizaConta();
//             }
//         });
//     };

//     this.btnParaDisplay = valor => {
//         this.display.value += valor;
//     };
// }

// const calc = new Calculadora();
// calc.inicia();

function Calculadora() {
    this.display = document.querySelector('.display');
  
    this.inicia = () => {
      this.capturaCliques();
      this.capturaEnter();
    };
  
    this.capturaEnter = () => {
      document.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    };
  
    this.capturaCliques = () => {
      document.addEventListener('click', event => {
        const el = event.target;
        if (el.classList.contains('btn-num')) this.addNumDisplay(el);
        if (el.classList.contains('btn-clear')) this.clear();
        if (el.classList.contains('btn-del')) this.del();
        if (el.classList.contains('btn-eq')) this.realizaConta();
      });
    };
  
    this.realizaConta = () => {
      try {
        const conta = eval(this.display.value);
  
        if(!conta) {
          alert('Conta inválida');
          return;
        }
  
        this.display.value = conta;
      } catch(e) {
        alert('Conta inválida');
        return;
      }
    };
  
    this.addNumDisplay = el => {
      this.display.value += el.innerText;
      this.display.focus();
    };
  
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);
  }
  
  const calculadora = new Calculadora();
  calculadora.inicia();
  
