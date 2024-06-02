exports.paginaInicial = (req, res) => {
    req.flash('info', 'Olá mundo!');
    req.flash('error', 'qwfqwfqwfq!');
    req.flash('success', 'kheorjgego!');
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};
