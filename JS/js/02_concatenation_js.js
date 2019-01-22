/*
**********************************La Concatenation***********************************

Concatener signifie mettre bout a bout deux chaines de caractères afin d' en formaer une troisième, nouvelle.
C' est donc additionner des chaines de caractères.
En JS, on va pouvoir concatener grace a l' opérateur "+"

var annee = 2017;
var futur = 3;
var calcul = annee + futur;
console.log(calcul);
document.write(calcul + "<br>");

var mois = "7";
var calcul2 = annee + " " + mois;
console.log(calcul2);
document.write(calcul2 + "<br>");

var debutPhrase = "Aujourd' hui";
var nbStagiaires = 9;
var suitePhrase = "stagiaires";
var finPhrase = "sont présents";
Pour afficher cette phrase en un seul morceau, avec la concatenation
console.log(debutPhrase + "," + " " + nbStagiaires + " " + suitePhrase + " " + finPhrase);
document.write(debutPhrase + "," + " " + nbStagiaires + " " + suitePhrase + " " + finPhrase);
ou
var phrase = debutPhrase + " " + nbStagiaires + " " + suitePhrase + " " + finPhrase ;
console.log(phrase);
document.write(phrase);

*/

var annee = 2017;
var futur = 3;
var calcul = annee + futur;
console.log(calcul);
document.write(calcul + "<br>");

var mois = "7";
var calcul2 = annee + " " + mois;
console.log(calcul2);
document.write(calcul2 + "<br>");

var debutPhrase = "Aujourd' hui";
var nbStagiaires = 9;
var suitePhrase = "stagiaires";
var finPhrase = "sont présents";
console.log(debutPhrase + "," + " " + nbStagiaires + " " + suitePhrase + " " + finPhrase);
document.write(debutPhrase + "," + " " + nbStagiaires + " " + suitePhrase + " " + finPhrase);