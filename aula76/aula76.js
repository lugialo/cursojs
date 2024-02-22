// Produto -> aumento, desconto
// Camiseta = Cor, caneca = material, lápis

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
}

Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

function Caneca(nome, preco, material) {
  Produto.call(this, nome, preco);
  this.material = material;
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta("Regata", 7.5, "Preta");
camiseta.aumento(10);
console.log(camiseta);
