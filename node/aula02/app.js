const Cachorro = require('./mod');

const cachorrinho = new Cachorro('dog');
cachorrinho.latir();

const path = require('path');
console.log(path.resolve(__dirname, '..', '..', 'aula03'));
console.log(__dirname);
