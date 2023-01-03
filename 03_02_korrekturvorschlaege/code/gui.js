const GUI = {

  eingabe: undefined,
  woerterAnzeige: undefined,
  breite: undefined,


  erzeugeGUI(){
    noCanvas();

    createElement("h1", "Korrekturvorschläge");
    
    createElement("label", "Eingabe..........");
    this.eingabe = createInput();
    this.eingabe.input(eingabe);
    createElement("br");

    createElement("label", "Ähnliche Wörter");
    createElement("br");
    this.woerterAnzeige = createElement('textarea');
    this.woerterAnzeige.attribute('disabled', 'true');
    
  }

}