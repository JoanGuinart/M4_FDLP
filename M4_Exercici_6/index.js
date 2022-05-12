function zodiac() {

    let diaNaixement = document.getElementById("diaNaixement").value;
    let mesNaixement = document.getElementById("mesNaixement").value;
    let zodiac
    switch (mesNaixement) {
        case "01":
            if (diaNaixement >= 20 && diaNaixement <= 31)
            zodiac = "Acuari"
            else if (diaNaixement < 20 && diaNaixement >=1) 
            zodiac = "Capricorn"
            break;
        case "02":
            if (diaNaixement <= 18 && diaNaixement <= 1) 
            zodiac = "Acuari"
            else if (diaNaixement > 18 && diaNaixement <=29) 
            zodiac = "Piscis"
            break;
        case "03":
            if (diaNaixement <= 20 && diaNaixement >= 1)
            zodiac = "Piscis"
            else if (diaNaixement > 20 && diaNaixement <= 31) 
            zodiac = "aries"
            break;
        case "04":
            if (diaNaixement <= 19 && diaNaixement >=1)
            zodiac = "Aries"
            else if (diaNaixement > 19 && diaNaixement <= 30) 
            zodiac = "Tauro"
            break;
        case "05":
            if (diaNaixement <= 20 && diaNaixement >= 1)
            zodiac = "Tauro"
            else if (diaNaixement > 20 && diaNaixement <= 31)
            zodiac = "Gèminis"
            break;
        case "06":
            if (diaNaixement <= 20 && diaNaixement >= 1 )
            zodiac = "Gèminis"
            else if (diaNaixement > 20 && diaNaixement <= 30)
            zodiac = "Càncer"
            break;
        case "07":
            if (diaNaixement <= 22 && diaNaixement >= 1)
            zodiac= "Càncer"
            else if (diaNaixement < 22 && diaNaixement <= 31 ) 
            zodiac = "LLeó"
            break;
        case "08":
            if (diaNaixement <= 22 && diaNaixement >=1)
            zodiac = "LLeó"
            else if (diaNaixement > 22 && diaNaixement <= 31)
            zodiac = "Verge"
            break;
        case "09":
            if (diaNaixement<= 22 && diaNaixement >= 1)
            zodiac = "Verge"
            else if (diaNaixement > 22 && diaNaixement <= 30)
            zodiac = "Balança"
            break;
        case "10":
            if (diaNaixement<= 22 && diaNaixement >= 1)
            zodiac = "Balança"
            else if (diaNaixement > 22 && diaNaixement <= 31)
            zodiac = "Escorpi"
            break;
        case "11":
            if (diaNaixement <= 21 && diaNaixement >= 1)
            zodiac = "Escorpi"
            else if (diaNaixement > 21 && diaNaixement <= 30)
            zodiac = "Sagitari"
            break;
        case "12":
            if (diaNaixement <= 21 && diaNaixement >= 1)
            zodiac = "Sagitari"
            else if (diaNaixement > 21 && diaNaixement <= 31)
            zodiac = "Capricorn"
            break;
        default: zodiac = `NPI`
            

    }

    document.getElementById("signeZodiac").innerHTML = `El teu signe del zodiac es: ${zodiac}`
}

/* De manera literal seria: 

document.getElementById("signeZodiac").innerHTML = zodiac [mesNaixement];

const zodiac = {
    1 : {
        `acuario`
    }
} */