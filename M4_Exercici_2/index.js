function formacio() {
    const edatUsuari = document.getElementById("edat").value;
    let resultat = document.getElementById("resultat");
    

    if ( (0 <= edatUsuari) && (edatUsuari <= 5) ) {resultat.innerHTML = `Preescolar`}
 
    else if ( (6 <= edatUsuari) && (edatUsuari <= 11) ) { resultat.innerHTML = `Primària`}
 
    else if ( (12 <= edatUsuari) && (edatUsuari <= 15) ) { resultat.innerHTML = `ESO`}
 
    else if ( (16 <= edatUsuari) && (edatUsuari <= 17) ) { resultat.innerHTML = `Batxillerat`}
 
    else if ( edatUsuari >= 18 ) { resultat.innerHTML = `FP o Universitat`}
 
    else { document.getElementById("resultat").innerHTML = `Impossible (:`}

}