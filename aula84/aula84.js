// aula 77 criando um validador de cpf

// class ValidaCPF {
//     constructor(cpfEnviado) {
//         Object.defineProperty(this, 'cpfLimpo', {
//             writable: false,
//             enumerable: false,
//             configurable: false,
//             value: cpfEnviado.replace(/\D+/g, '')
//         })
//     }

//     valida() {
//         if(typeof this.cpfLimpo === 'undefined') return false;
//         if(this.cpfLimpo.length !== 11) return false;
//         if (this.isSequencia()) return false;

//         const cpfParcial = this.cpfLimpo.slice(0,-2);
//         const digito1 = this.criaDigito(cpfParcial);
//         const digito2 = this.criaDigito(cpfParcial + digito1);

//         const novoCpf = cpfParcial + digito1 + digito2;
//         return novoCpf === this.cpfLimpo;
        
//     }

//     criaDigito(cpfParcial) {
//         const cpfArray = Array.from(cpfParcial);

//         let regressivo = cpfArray.length + 1;
//         const total = cpfArray.reduce((ac, val) => {
//             ac+= (regressivo * Number(val));
//             regressivo--;
//             return ac;
//         }, 0);

//         const digito = 11 - (total % 11);
//         return digito > 9 ? '0' : String(digito);
//     }

//     isSequencia() {
//         return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
//     };


// };



// const validacpf = new ValidaCPF('705.484.450-52');

// if (validacpf.valida()) {
//     console.log('Cpf válido!');
// } else {
//     console.log('Cpf inválido!');
// }

// 705.484.450-52 070.987.720-03
class ValidaCPF {
    constructor(cpfEnviado) {
      Object.defineProperty(this, 'cpfLimpo', {
        writable: false,
        enumerable: true,
        configurable: false,
        value: cpfEnviado.replace(/\D+/g, '')
      });
    }
  
    éSequência() {
      return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
  
    geraNovoCpf() {
      const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
      const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
      const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
      this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }
  
    static geraDigito(cpfSemDigitos) {
      let total = 0;
      let reverso = cpfSemDigitos.length + 1;
  
      for(let stringNumerica of cpfSemDigitos) {
        total += reverso * Number(stringNumerica);
        reverso--;
      }
  
      const digito = 11 - (total % 11);
      return digito <= 9 ? String(digito) : '0';
    }
  
    valida() {
      if(!this.cpfLimpo) return false;
      if(typeof this.cpfLimpo !== 'string') return false;
      if(this.cpfLimpo.length !== 11) return false;
      if(this.éSequência()) return false;
      this.geraNovoCpf();
  
      return this.novoCPF === this.cpfLimpo;
    }
  }
  
  let validacpf = new ValidaCPF('070.987.720-03');
  // validacpf = new ValidaCPF('999.999.999-99');
  
  if (validacpf.valida()) {
    console.log('CPF válido');
  } else {
    console.log('CPF inválido');
  }