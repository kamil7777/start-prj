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

let diameter, temp, coefficient, thin, corrosion, pipe, nameSteel, pressure, strengthSteel;

diameter = document.querySelector('.diameter');
temp = document.querySelector('.temp');
pipe = document.querySelector('.pipe');
coefficient = document.querySelector('.coefficient');
thin = document.querySelector('.thin');
corrosion = document.querySelector('.corrosion');
nameSteel = document.querySelector('.steel');
pressure = document.querySelector('.pressure');

function checkRadioBtn() {
    document.querySelector('.grid').addEventListener('click', (event) => {
        if (event.target.classList.contains('radioBtn-label')) {
            document.querySelectorAll('.radioBtn-label').forEach(item => item.classList.remove('active'));
            event.target.classList.add('active');
        }
        /* document.querySelectorAll('.input').forEach(item => {
                if (!item.classList.contains('active')) {
                    item.setAttribute('disabled', 'disabled');
                }
               

                
            }); */
        
    });
}

checkRadioBtn();

function getCalculation () {
    for (let i = 0; i <steel.length; i++) {
        for (let name in steel[i]) {
            if (steel[i].name === nameSteel.value) {
                strengthSteel = Number(steel[i].strength) / 2.4;
            }
        }
    }
    const thickness = Number(pressure.value) * Number(diameter.value) / (2 * Number(coefficient.value) * strengthSteel + Number(pressure.value)) + Number(corrosion.value) + Number(thin.value);
    document.querySelector('.thicknessData').value = thickness.toFixed(2);
}

document.querySelector('.calculation').addEventListener ('click', getCalculation)