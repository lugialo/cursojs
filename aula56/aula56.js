function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter

        set nomeCompleto(valor) {
            valor = valor.split(' '); // Split the string into an array
            this.nome = valor.shift(); 
            this.sobrenome = valor.join(' ');
        },
        fala(assunto) {
            return `${this.nome} ${this.sobrenome} está falando sobre ${assunto}.`; 
        },
        altura: altura,
        peso: peso,
        // Getter
        get imc () {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Gabriel', 'Antonin', 1.80, 80);
p1.nomeCompleto = 'João Bolão';
console.log(p1.nome)