const diasEL = document.getElementById('dias');
const horasEL = document.getElementById('horas');
const minutosEL = document.getElementById('minutos');
const segundosEL = document.getElementById('segundos');

const anoNovo = "1 Jan 2025";

function contador() {
    const diaAnoNovo = new Date(anoNovo);
    const dataAtual = new Date();

    const totalSegundos = (diaAnoNovo - dataAtual) / 1000;
    console.log('Total de segundos restantes:', totalSegundos); 

    const dias = Math.floor(totalSegundos / 3600 / 24);
    const horas = Math.floor(totalSegundos / 3600) % 24;
    const minutos = Math.floor(totalSegundos / 60) % 60;
    const segundos = Math.floor(totalSegundos) % 60;


    diasEL.innerHTML = dias;
    horasEL.innerHTML = formatotempo(horas);
    minutosEL.innerHTML = formatotempo(minutos);
    segundosEL.innerHTML = formatotempo(segundos);
}

function formatotempo(time) {
    return time < 10 ? `0${time}` : time;
}

contador();

setInterval(contador, 1000);