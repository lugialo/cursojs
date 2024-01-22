function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 10));
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 10));
}

const p1 = new Produto('Camiseta', 50);
p1.desconto(100);
p1.aumento(100);