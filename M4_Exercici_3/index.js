function beca(){
    const edat = document.getElementById("edat").value;
    const titol = document.getElementById("titolUniversitari").value;
    const atur = document.getElementById("atur").value;
    let resultat = document.getElementById("resultat");
    if(edat >= 18 && titol == 1) {
        resultat.innerHTML = `Tens beca!` 
       } else if ( atur == 1) {
        resultat.innerHTML = `Tens beca!!!` 
       } else { resultat.innerHTML = `No tens beca :( `}
    }