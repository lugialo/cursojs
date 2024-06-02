const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'Outra coisa qualquer.',
    descricao: 'jwqfjwqfioqwjq.'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};
