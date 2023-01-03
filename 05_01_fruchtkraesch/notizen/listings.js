// Aus KI ////////////////////////////////

besterZug(spielzustand, suchtiefe) {

  if(!spielzustand.zugMoeglich()) {
    return
  }

  spielzustand.zugarchiv = [];
  
  const zustaende = this.berechneSpielverlaeufe(spielzustand, suchtiefe);
  this.sortiereNachBewertung(zustaende);
  const besterZustand = zustaende[0];
  const besterZug = besterZustand.zugarchiv[0];
  return besterZug;
}

/////////////////////////////////////////

sortiereNachBewertung(spielzustaende) {
  spielzustaende.sort((spielzustandL, spielzustandR) => 
    spielzustandR.bewertung() - spielzustandL.bewertung());
}

/////////////////////////////////////////

berechneSpielverlaeufe(spielzustand, suchtiefe) {
  let warteschlange = [spielzustand];
  let resultat = [];
  
  while (warteschlange.length != 0) {
    const spielzustand = warteschlange.shift();

    if (!spielzustand.zugMoeglich()) {
      resultat.push(spielzustand);
      continue;
    }

    if (spielzustand.zugarchiv.length == suchtiefe) {
      resultat.push(spielzustand);
      continue;
    }

    let folgezustaende = this.berechneFolgezustaende(spielzustand);
    this.sortiereNachBewertung(folgezustaende);
    folgezustaende = folgezustaende.slice(0, 3);
    warteschlange = warteschlange.concat(folgezustaende);
  }

  return resultat;
}

/////////////////////////////////////////

berechneFolgezustaende(spielzustand) {
  const moeglicheZuege = spielzustand.moeglicheZuege;
  return moeglicheZuege.map(zug => spielzustand.ziehe(zug));
}

/////////////////////////////////////////
/////////////////////////////////////////

bewertung() {
  return this.punkte + this.potential;
}

/////////////////////////////////////////
/////////////////////////////////////////

spielzustand = spielzustand.ziehe(zugKoordinaten);