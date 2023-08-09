const time = document.querySelector('.time-stamp')
const data = new Date("2019-10-07 22:52:00");

const ano = data.getFullYear();
const diaSemana = data.getDay();
const diaMes = data.getDate();
const mes = data.getMonth();

// const hora = date.getHours();
// const mins = date.getMinutes();


// let diaSemanaTexto;
// let mesTexto;

// switch (diaSemana) {
// case 0:
//     diaSemanaTexto = "Domingo"
//     break;
// case 1:
//     diaSemanaTexto = "Segunda-feira" 
//     break;
// case 2:
//     diaSemanaTexto = "Terça-feira"  
//     break;
// case 3:
//     diaSemanaTexto = "Quarta-feira"  
//     break;
// case 4:
//     diaSemanaTexto = "Quinta-feira"  
//     break; 
// case 5:
//     diaSemanaTexto = "Sexta-feira"  
//     break;           
// case 6:
//     diaSemanaTexto = "Sábado"  
//     break;
// }

// switch (mes) {
//     case 0:
//         mesTexto = "Janeiro"
//         break;
//     case 1:
//         mesTexto = "Fevereiro" 
//         break;
//     case 2:
//         mesTexto = "Março"  
//         break;
//     case 3:
//         mesTexto = "Abril"  
//         break;
//     case 4:
//         mesTexto = "Maio"  
//         break; 
//     case 5:
//         mesTexto = "Junho"  
//         break;           
//     case 6:
//         mesTexto = "Julho"  
//         break; 
//     case 7:
//         mesTexto = "Agosto"
//         break;
//     case 8:
//         mesTexto = "Setembro" 
//         break;
//     case 9:
//         mesTexto = "Outubro"  
//         break;
//     case 10:
//         mesTexto = "Novembro"  
//         break;
//     case 11:
//         mesTexto = "Dezembro"  
//         break;  
// }

// time.innerHTML += `${diaSemanaTexto}, ${diaMes} de  ${mesTexto} de ${ano} ${hora}:${mins}`;
// Maneira gigatonica de se fazer a mesma coisa!!!

// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// };

// time.innerHTML = date.toLocaleString('pt-BR', opcoes);

function getDiaSemanaTexto(diaSemana) {
    const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 
        'sexta', 'sábado'];
    return diasSemana[diaSemana];
}

function getNomeMes(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro'
        ,'outubro', 'novembro', 'dezembro'];
    return meses[numeroMes];
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
        ` de ${data.getFullYear()}` +
        ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    )
}

time.innerHTML = criaData(data);