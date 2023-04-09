export default function getCalculationThick (pressure, coefficient, strengthSteel, thick, corrosion, thin, diameter) {
    return  (Number(pressure) * Number(diameter) / (2 * Number(coefficient) * strengthSteel + Number(pressure)) + Number(corrosion) + Number(thin)).toFixed(2);
}

