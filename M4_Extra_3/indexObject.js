function jugar() {
    const usuari = Number(document.getElementById("PPTUsuari").value);
    let numRandom = Math.floor(Math.random() * (4 - 1)) + 1;
    const pedra = 1;
    const paper = 2;
    const tisora = 3;
  
    let resultat;

    const PPT = {
        1:{ name: `Pedra`},
        2:{ name: `Paper`},
        3:{ name: `Tisora`}
    }