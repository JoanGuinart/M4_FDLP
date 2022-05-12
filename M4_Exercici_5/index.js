function calcular() {
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let operador = document.getElementById("operador").value;

    switch(operador) {

        case "+":
            operacio = `La suma dels dos nombres és:  ${numero1 + numero2}`;
            break;
        case "*":
            operacio = `La multiplicació dels dos nombres és: ${numero1 * numero2}`;
            break;
        case "-":
            operacio = `La resta dels dos nombres és: ${numero1 - numero2}`;
            break;
        case "/": 
            operacio = `La divisió dels dos nombres és: ${numero1 / numero2}`;
            break;
            
            default: operacio = `NPI`
        
       }
       document.getElementById("resultat").innerHTML = operacio
}