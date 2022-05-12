function resultat (){
let mes  = parseInt (document.getElementById("mes").value);


let diesDeMes
switch (mes) {
    case 1:
        diesDeMes = `gener te 31`
        break; 
    case 3:
        diesDeMes = `març te 31`
        break;
    case 5:
        diesDeMes = `maig te 31`
        break;
    case 7:
        diesDeMes = `juliol te 31`
        break;
    case 8:
        diesDeMes = `agost te 31`
        break;
    case 10:
        diesDeMes = `octubre te 31`
        break;
    case 12:
        diesDeMes = `desembre te 31`
        break;

        

        case "gener":
        case "març":
        case "maig":
        case "juliol":
        case "agost":
        case "octubre":
        case "desembre": 

       diesDeMes = `te 31`;
       break;
    case 4:
        diesDeMes = `abril te 30`
        break;
    case 6:
        diesDeMes = `juny te 30`
        break;
    case 9:
        diesDeMes = `septembre te 30`
        break;
    case 11:
        diesDeMes = `novembre te 30`
        break;

        case "abril":
        case "juny":
        case "septembre":
        case "novembre":

        diesDeMes = `te 30`;
        break;
    case 2: 
        case "febrer":
            diesDeMes = `febrer te 28 o 29`
            break;
            
        diesDeMes = `te 28 o 29`; 
        break;
        default: diesDeMes = `no existeix i no té`
   }
document.getElementById("diesDelMes").innerHTML = `El mes ${diesDeMes} dies `
}
/* per que ho haig de posar com strings i no com numeros?*/