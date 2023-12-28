// ? : 
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'VIP' : 'Normal';

if (pontuacaoUsuario >= 100) {
    console.log('Usuário VIP!');
} else {
    console.log('Usuário normal!');
}

