function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // Mostra a chave
    configurable: true, // configurável
    get: function () {
      return estoque;
    },
    set: function (valor) {
      console.log(valor);
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1.estoque);
