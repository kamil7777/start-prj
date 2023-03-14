import getModalWindow from "./module/modalWindow.js";

getModalWindow();

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

const alertWindow = document.querySelector('.alert');
const btn = document.querySelector('.btn1');
const buttonModal = document.querySelector('.button-modal')

function toggleActive() {
    alertWindow .classList.toggle('active');
    const tempModule = Number(document.querySelector('.tempGive').value);
    const steelModule = document.querySelector('.pipeBasic').value;
    const controlModule = document.querySelector(`.weldInspection`);
    document.querySelector('.tempTake').value = tempModule;
    document.querySelector('.pipeModule').value = steelModule;
    if (tempModule <= 510 && steelModule === 'Бесшовная') {
        controlModule.setAttribute('disabled', 'disabled');
        document.querySelector('#inputWeldInspection').value = 1;
        coefficient.value = document.querySelector('#inputWeldInspection').value;
    }
    else if (tempModule <= 510 && steelModule === 'Электросварная' && controlModule.value === '100 % контроль шва') {
        document.querySelector('#inputWeldInspection').value = 1;
        coefficient.value = document.querySelector('#inputWeldInspection').value;
    }
    else if (tempModule <= 510 && steelModule === 'Электросварная'&& controlModule.value === 'контроль шва > 10%') {
        document.querySelector('#inputWeldInspection').value = 1*0.8;
        coefficient.value = document.querySelector('#inputWeldInspection').value;
    }
    else if (tempModule <= 510 && steelModule === 'Электросварная'&& controlModule.value === 'контроль шва < 10%') {
        document.querySelector('#inputWeldInspection').value = 1*0.7;
        coefficient.value = document.querySelector('#inputWeldInspection').value;
    }
}

buttonModal.addEventListener('click', toggleActive);

btn.addEventListener('click', toggleActive)

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('active')) {
        toggleActive();
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

function checkInputValuePress() {
    if(!(coefficient.value && thick.value && corrosion.value && thin.value && diameter.value)) alert ('Заполните все поля, пожалуйста!');
}

function checkInputValueThick() {
    if(!(coefficient.value && pressure.value && corrosion.value && thin.value && diameter.value)) alert ("Заполните все поля, пожалуйста!");
}

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
        checkInputValueThick()
        thick.value = getCalculationThick();
    } else {
        checkInputValuePress()
        pressure.value = getCalculationPress();
    }
}

document.querySelector('.calculation').addEventListener ('click', getCalculation)



