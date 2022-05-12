const USUARI_GUANYADOR = 'Guanyador = Usuari'
const PC_GUANYADOR = 'Guanyador = Màquina'
const EMPAT = 'Empat, torna a triar!'

const PEDRA = 'pedra'
const PAPER = 'paper'
const TISORA = 'tisora'

const opcionsJoc = {
  1: PEDRA,

  2: PAPER,

  3: TISORA,
};

function startGame(/*  let  */opcioUsuari ) {
  let numRandom = Math.floor(Math.random() * (4 - 1)) + 1;

  const opcioPc = opcionsJoc[numRandom];

  const usuariGuanyador = 
  (opcioUsuari === PEDRA && opcioPc === TISORA ) || 
  (opcioUsuari === PAPER && opcioPc === PEDRA) || 
  (opcioUsuari === TISORA && opcioPc === PAPER)

  const pcGuanyador = 
  (opcioUsuari === PEDRA && opcioPc === PAPER) || 
  (opcioUsuari === PAPER && opcioPc === TISORA) || 
  (opcioUsuari === TISORA && opcioPc === PEDRA)

  let resultat;

  if (opcioUsuari === opcioPc) resultat = EMPAT;

  if (usuariGuanyador) resultat = USUARI_GUANYADOR;
  
  if (pcGuanyador) resultat = PC_GUANYADOR;
  

  document.getElementById(
    "resultat"
  ).innerHTML = `I el resultat es: Jo 🙋‍♂️ = ${opcioUsuari} <br> Ordinador 💻 = ${opcioPc} <br> ➡  ${resultat}`;
}
function dirAdeu() {
  document.getElementById("resultat").innerHTML = `Veig que no vols jugar adeu 👋🏽 🙃`;
}

function jugar() {
  const opcioUsuariNum = Number(document.getElementById("PPTUsuari").value);

  const opcioUsuari = opcionsJoc[opcioUsuariNum];
  
   opcioUsuari ? startGame(opcioUsuari) : dirAdeu()

 /*  if (!opcioUsuari) {
    dirAdeu();
  }

  if (opcioUsuari) {
    startGame(/* opcioUsuari =  opcioUsuari);   }
    */

} 
