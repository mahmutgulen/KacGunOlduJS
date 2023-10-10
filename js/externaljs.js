const form = document.getElementById('form-date');
const nowDate = new Date();
const result = document.querySelector('.result');

const oldResultYil = document.getElementById('resultYil');
const oldResultAy = document.getElementById('resultAy');
const oldResultGun = document.getElementById('resultGun');
const oldResultSaat = document.getElementById('resultSaat');
const oldResultDakika = document.getElementById('resultDakika');
const oldResultTotal = document.getElementById('resultTotal');

form.addEventListener('submit', e => {
    e.preventDefault();

    const formYear = form.yil.value;
    const formMonth = form.ay.value;
    const formDay = form.gun.value;
    const formDate = new Date(`${formYear}-${formMonth}-${formDay}`);

    // ...
    const diff = nowDate.getTime() - formDate.getTime();

    const mins = Math.round(diff / 1000 / 60);
    const hours = Math.round(mins / 60);
    const days = Math.round(hours / 24);
    const years = Math.round(days / 365);
    const months = Math.round(days / 30);


    oldResultYil.innerHTML = `${years} Yıl`;
    oldResultAy.innerHTML = `${months} Ay`;
    oldResultDakika.innerHTML = `${mins} Dakika`;
    oldResultSaat.innerHTML = `${hours} Saat`;

    if (result.classList.contains('d-none')) {
        result.setAttribute('class', 'result');
    }

    let dayScore = 0;
    const bastir = setInterval(() => {

        oldResultGun.innerHTML = `${dayScore} Gün`;
        if (dayScore == days) {
            clearInterval(bastir);
        }
        else {
            dayScore++;
        }


    },1);
});