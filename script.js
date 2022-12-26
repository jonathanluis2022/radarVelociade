const acelerar = document.querySelector('.acelerador');
const freiar = document.querySelector('.freio');
const velocimetro = document.querySelector('.velocimetro');
const multas = document.querySelector('.multas')
let acelera = 0;
let interval;

acelerar.addEventListener('click', function () {
    clearInterval(interval)
    interval = setInterval(velocidade, 120)
});

freiar.addEventListener('click', function () {
    clearInterval(interval)
    interval = setInterval(frenar, 210)
});

function velocidade() {
    acelera++
    if (acelera <= 9) { velocimetro.innerHTML = "0" + acelera + ' km/h' };
    if (acelera > 9) { velocimetro.innerHTML = acelera + ' km/h' };
    if (acelera >= 100) { velocimetro.innerHTML = '120' + 'km/h' }

    if (acelera >= 60) {
        multas.classList.add('infra')
        multas.innerHTML = 'Tolerância e Penalidade : Via de 60 km/h - Passou em 61 a 72km/h: Multade R$ 130,16'
    }

}

function frenar() {
    acelera--
    if (acelera <= 9) { velocimetro.innerHTML = "0" + acelera + ' km/h' };
    if (acelera > 9) { velocimetro.innerHTML = acelera + ' km/h' };
    if (acelera <= 0) { velocimetro.innerHTML = "00 km/h" };
}


