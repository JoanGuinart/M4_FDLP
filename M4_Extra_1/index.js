function calcular() {
let numero1 = parseInt( document.getElementById("divident").value );
let numero2 = parseInt( document.getElementById("divisor").value );
let resto_divisio = ( numero1 % numero2 ) === 0;
let resultat; 
let error = ` Error !!  Escriu un número entre 2 i 7 ¬¬ `;
const MAX_DIVISOR = 7;
const MIN_DIVISOR = 2;
const incorrectDivisor = numero2 < MIN_DIVISOR || numero2 > MAX_DIVISOR;
const operacio = document.getElementById("resultatFinal")

if ( incorrectDivisor ) {
     operacio.innerHTML = `${error}`
     return /*És com un break*/
}
else if  (resto_divisio) { 
    resultat = `Si que es múltiple` 
}
else { resultat = `no es múltiple` };

operacio.innerHTML =`El número ${numero1} ${resultat} del ${numero2}`;
}
