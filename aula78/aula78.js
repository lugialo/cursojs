// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};
ContaCorrente.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};
ContaCorrente.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta}` 
    + ` Saldo: R$${this.saldo.toFixed(2)}` 
    );
};



const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);