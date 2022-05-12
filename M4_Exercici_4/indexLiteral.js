function resultat (){
    let mes  = parseInt (document.getElementById("mes").value);

    if(isNaN(mes)){
        alert(`No correspon a un número`)
    } else if (mes < 1 || mes > 12){
        alert(`El número ha de ser entre el 1 i el 12`)
        return
    }

    const monthDaysDictionary = {
        1: { name:`Gener`, days: 31 },
        2: { name: `Febrer`, days: 28 },
        3: { name: `Març`, days: 31 },
        4: { name: `abril`, days: 30 },
        5: { name: `Maig`, days: 31 },
        6: { name: `Juny`, days: 30 },
        7: { name: `Juliol`, days: 31 },
        8: { name: `Agost`, days: 31 },
        9: { name: `Septembre`, days: 30 },
        10: { name: `Octubre`, days: 31 },
        11: { name: `Novembre`, days: 30 },
        12: { name: `Desembre`, days: 31 }

    }
    document.getElementById("diesDelMes").innerHTML = `El mes de ${monthDaysDictionary[mes].name} te ${monthDaysDictionary[mes].days} dies `
}