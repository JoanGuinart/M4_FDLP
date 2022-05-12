// Catala!---------------------------------------------------------------

function calcula() {
  let numero = Number(document.getElementById("numero").value);

  let desenes = Math.trunc(numero / 10);
  document.getElementById("numero1").innerHTML = ` Desenes ${desenes}`;

  let unitats = Math.trunc(numero % 10);
  document.getElementById("numero2").innerHTML = ` Unitats ${unitats}`;

  let unitat = 0;
  let desena = 0;
  let numerosEnLLetres = 0;

  if (numero >= 0 && numero <= 99) {
    switch (unitats) {
      case 1:
        unitat = "U";
        break;
      case 2:
        unitat = "DOS";
        break;
      case 3:
        unitat = "TRES";
        break;
      case 4:
        unitat = "QUATRE";
        break;
      case 5:
        unitat = "CINC";
        break;
      case 6:
        unitat = "SIS";
        break;
      case 7:
        unitat = "SET";
        break;
      case 8:
        unitat = "VUIT";
        break;
      case 9:
        unitat = "NOU";
    }

    switch (desenes) {
      case 2:
        desena = "VINT";
        break;
      case 3:
        desena = "TRENTA";
        break;
      case 4:
        desena = "QUARANTA";
        break;
      case 5:
        desena = "CINQUANTA";
        break;
      case 6:
        desena = "SEIXANTA";
        break;
      case 7:
        desena = "SETANTA";
        break;
      case 8:
        desena = "VUITANTA";
        break;
      case 9:
        desena = "NORANTA";
    }

    if (numero == 0 || (numero >= 10 && numero < 20)) {
      switch (numero) {
        case 0:
          numerosEnLLetres = "ZERO";
          break;
        case 10:
          numerosEnLLetres = "DEU";
          break;
        case 11:
          numerosEnLLetres = "ONZE";
          break;
        case 12:
          numerosEnLLetres = "DOTZE";
          break;
        case 13:
          numerosEnLLetres = "TRETZE";
          break;
        case 14:
          numerosEnLLetres = "CATORZE";
          break;
        case 15:
          numerosEnLLetres = "QUINZE";
          break;
        case 16:
          numerosEnLLetres = "SETZE";
          break;
        case 17:
          numerosEnLLetres = "DISET";
          break;
        case 18:
          numerosEnLLetres = "DIVUIT";
          break;
        case 19:
          numerosEnLLetres = "DINOU";
      }
    } else if (desenes === 2 && numero > 20) {
      numerosEnLLetres = desena + "-i-" + unitat;
    } else if (unitats == 0 && (numero != 0 || numero != 10)) {
      numerosEnLLetres = desena;
    } else if (numero < 10) {
      numerosEnLLetres = unitat;
    } else {
      numerosEnLLetres = desena + "-" + unitat;
    }
  } else numerosEnLLetres = `No he dit que posis aquest número ¬¬`;

  document.getElementById(
    "numerosCatala"
  ).innerHTML = `El número es: ${numerosEnLLetres}`;
}

// Castella------------------------------------------------------------

function calcula2() {
  let numero = Number(document.getElementById("numero").value);

  let desenes = Math.trunc(numero / 10);
  document.getElementById("numero1").innerHTML = ` Decenas ${desenes}`;

  let unitats = Math.trunc(numero % 10);
  document.getElementById("numero2").innerHTML = ` Unidades ${unitats}`;

  let unitat = 0;
  let desena = 0;
  let numerosEnLLetres = 0;

  if (numero >= 0 && numero <= 99) {
    switch (unitats) {
      case 1:
        unitat = "UNO";
        break;
      case 2:
        unitat = "DOS";
        break;
      case 3:
        unitat = "TRES";
        break;
      case 4:
        unitat = "CUATRO";
        break;
      case 5:
        unitat = "CINCO";
        break;
      case 6:
        unitat = "SEIS";
        break;
      case 7:
        unitat = "SIETE";
        break;
      case 8:
        unitat = "OCHO";
        break;
      case 9:
        unitat = "NUEVE";
    }

    switch (desenes) {
      case 2:
        desena = "VEINTE";
        break;
      case 3:
        desena = "TRENTA";
        break;
      case 4:
        desena = "CUARENTA";
        break;
      case 5:
        desena = "CINCUENTA";
        break;
      case 6:
        desena = "SESENTA";
        break;
      case 7:
        desena = "SETENTA";
        break;
      case 8:
        desena = "OCHENTA";
        break;
      case 9:
        desena = "NOVENTA";
    }

    if (numero == 0 || (numero >= 10 && numero < 20)) {
      switch (numero) {
        case 0:
          numerosEnLLetres = "ZERO";
          break;
        case 10:
          numerosEnLLetres = "DIEZ";
          break;
        case 11:
          numerosEnLLetres = "ONCE";
          break;
        case 12:
          numerosEnLLetres = "DOCE";
          break;
        case 13:
          numerosEnLLetres = "TRECE";
          break;
        case 14:
          numerosEnLLetres = "CATORCE";
          break;
        case 15:
          numerosEnLLetres = "QUINCE";
          break;
        case 16:
          numerosEnLLetres = "DIECISEIS";
          break;
        case 17:
          numerosEnLLetres = "DIECISIETE";
          break;
        case 18:
          numerosEnLLetres = "DIECIOCHO";
          break;
        case 19:
          numerosEnLLetres = "DIEZINUEVE";
      }
    } else if (desenes === 2 && numero <= 29 && numero >= 21)
      numerosEnLLetres = `VEINTI${unitat}`;
    else if (numero >= 30) {
      numerosEnLLetres = desena + " Y " + unitat;
    } else if (unitats == 0 && (numero != 0 || numero != 10)) {
      numerosEnLLetres = desena;
    } else if (numero < 10) {
      numerosEnLLetres = unitat;
    } else {
      numerosEnLLetres = desena + " " + unitat;
    }
  }
  numerosEnLLetres = `No he dicho que pongas este número ¬¬`;

  document.getElementById(
    "numerosCastella"
  ).innerHTML = `El número es: ${numerosEnLLetres}`;
}

// Anglès---------------------------------------------------------------

function calcula3() {
  let numero = Number(document.getElementById("numero").value);

  let desenes = Math.trunc(numero / 10);
  document.getElementById("numero1").innerHTML = ` Tens ${desenes}`;

  let unitats = Math.trunc(numero % 10);
  document.getElementById("numero2").innerHTML = ` Units ${unitats}`;

  let unitat = 0;
  let desena = 0;
  let numerosEnLLetres = 0;

  if (numero >= 0 && numero <= 99) {
    switch (unitats) {
      case 1:
        unitat = "ONE";
        break;
      case 2:
        unitat = "TWOO";
        break;
      case 3:
        unitat = "THREE";
        break;
      case 4:
        unitat = "FOUR";
        break;
      case 5:
        unitat = "FIVE";
        break;
      case 6:
        unitat = "SIX";
        break;
      case 7:
        unitat = "SEVEN";
        break;
      case 8:
        unitat = "EIGHT";
        break;
      case 9:
        unitat = "NINE";
    }

    switch (desenes) {
      case 2:
        desena = "TWENTY";
        break;
      case 3:
        desena = "THIRTY";
        break;
      case 4:
        desena = "FORTY";
        break;
      case 5:
        desena = "FIFTY";
        break;
      case 6:
        desena = "SIXTY";
        break;
      case 7:
        desena = "SEVENTY";
        break;
      case 8:
        desena = "EIGHTY";
        break;
      case 9:
        desena = "NINETY";
    }

    if (numero == 0 || (numero >= 10 && numero < 20)) {
      switch (numero) {
        case 0:
          numerosEnLLetres = "ZERO";
          break;
        case 10:
          numerosEnLLetres = "TEN";
          break;
        case 11:
          numerosEnLLetres = "ELEVEN";
          break;
        case 12:
          numerosEnLLetres = "TWELVE";
          break;
        case 13:
          numerosEnLLetres = "THIRTEEN";
          break;
        case 14:
          numerosEnLLetres = "FOURTEEN";
          break;
        case 15:
          numerosEnLLetres = "FIFTEEN";
          break;
        case 16:
          numerosEnLLetres = "SIXTEEN";
          break;
        case 17:
          numerosEnLLetres = "SEVENTEEN";
          break;
        case 18:
          numerosEnLLetres = "EIGHTEEN";
          break;
        case 19:
          numerosEnLLetres = "NINETEEN";
      }
    } else if (desenes === 2 && numero > 20) {
      numerosEnLLetres = desena + "-" + unitat;
    } else if (unitats == 0 && (numero != 0 || numero != 10)) {
      numerosEnLLetres = desena;
    } else if (numero < 10) {
      numerosEnLLetres = unitat;
    } else {
      numerosEnLLetres = desena + "-" + unitat;
    }
  }
  numerosEnLLetres = `I didn't tell you to put this type of number ¬¬`;

  document.getElementById(
    "numerosAngles"
  ).innerHTML = `The number is: ${numerosEnLLetres}`;
}
