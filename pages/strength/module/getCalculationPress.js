export default function getCalculationPress (coefficient, strengthSteel, thick, corrosion, thin, diameter) {
   return  (2 * Number(coefficient) * strengthSteel*(Number(thick) - Number(corrosion) - Number(thin)) / (Number(diameter) - (Number(thick) - Number(corrosion) - Number(thin)))).toFixed(2);
}