function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random () * (max - min) + min);
}

function esperaAi(msg, tempo) {

    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject ('BAD VALUE');
        setTimeout(() => {
            console.log(msg);
            resolve(msg);
        }, tempo);
    });

    
    
}

esperaAi(12, aleatorio(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 2', rand(1, 3));
    })
    .catch(e => {
        console.log('ERRO:', e)
    });

