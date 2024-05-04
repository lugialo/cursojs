const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// /profiles/12345?
// campanha=googleads
// &nomecampanha=seila

app.get('/', (req, res) => {
    res.send(
        `<form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>`
    );
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Recebi o formulário!');
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    // /profiles/3
    // /profiles/?chave1=valor1&chave2=valor2&chave3=valor3
    console.log(req.params);
    console.log(req.query);
    res.send(req.params);
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato conosco!');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
