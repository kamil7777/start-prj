const steel = [
    {
        name: '20',
        strength: '430',
    },
    {
        name: '10',
        strength: '420',
    },
    {
        name: '09Г2С',
        strength: '460',
    },
]

let diameter, temp, coefficient, thin, corrosion, pipe, nameSteel, pressure, strengthSteel, thick;

diameter = document.querySelector('.diameter');
temp = document.querySelector('.temp');
pipe = document.querySelector('.pipe');
coefficient = document.querySelector('.coefficient');
thin = document.querySelector('.thin');
corrosion = document.querySelector('.corrosion');
nameSteel = document.querySelector('.steel');
pressure = document.querySelector('.pressure');
thick = document.querySelector('.thicknessData');

const alert = document.querySelectorAll('.alert');
const btn = document.querySelector('.btn1');

btn.addEventListener('click',() => {
    alert.forEach(item => item.classList.toggle('active'));
    
})
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('alert')) {
        alert.forEach(item => item.classList.toggle('active'));
    }
});


function checkRadioBtn() {
    document.querySelector('.grid').addEventListener('click', (event) => {
        if (event.target.classList.contains('radioBtn-label')) {
            if (event.target.getAttribute('for') === 'pressure') {
                pressure.setAttribute('disabled', 'disabled');
                thick.removeAttribute('disabled');
            }
            else {
                thick.setAttribute('disabled', 'disabled');
                pressure.removeAttribute('disabled');
            }
        }
    });
}

checkRadioBtn();


function getCalculationPress () {
    return  (2 * Number(coefficient.value) * strengthSteel*(Number(thick.value) - Number(corrosion.value) - Number(thin.value)) / (Number(diameter.value) - (Number(thick.value) - Number(corrosion.value) - Number(thin.value)))).toFixed(2);
}

function getCalculationThick () {
    return (Number(pressure.value) * Number(diameter.value) / (2 * Number(coefficient.value) * strengthSteel + Number(pressure.value)) + Number(corrosion.value) + Number(thin.value)).toFixed(2);
}

function getCalculation () {
    for (let i = 0; i <steel.length; i++) {
        for (let name in steel[i]) {
            if (steel[i].name === nameSteel.value) {
                strengthSteel = Number(steel[i].strength) / 2.4;
            }
        }
    }
    if (thick.hasAttribute('disabled')) {
        thick.value = getCalculationThick();
    } else {
        pressure.value = getCalculationPress();
    }
}

document.querySelector('.calculation').addEventListener ('click', getCalculation)