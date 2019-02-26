var operation1 = 1 + 2;
document.write(operation1 + "<br>");

maChaine = "Je m' appelle" + " aziz";
document.write(maChaine + "</br>");

var operation2 = 2 + 3 * 5;
document.write(operation2 + "<br>");

// pour alterer les precedences ( mettre les parentheses pour les priorités)
var operation3 = (2 + 3) * 5;
document.write(operation2 + "<br>");

// le modulo ( signe %: le reste de la division)
var operation4 = 10 % 2;
document.write(operation4 + "<br>");
// nous retournera 0 car il n' y a pas de reste quand on divise 10 par 2

var operation5 = 17 % 3;
document.write(operation5 + "<br>");
// nous retourne 2, car 17/3 = 5 avec un reste de 2

var monVehicule1 = "voiture";
var monVehicule2 = "camion";

document.write(monVehicule2 === "velo") + "<br>";
/*
operateur de comparaison: renvoie le booléen True ou False
le signe === signifie, égalité stricte
*/
monChiffre = "20";
document.write(monChiffre === 20) + "<br>";

monChiffre = "20";
document.write(monChiffre == 20) + "<br>";

monChiffre = "20";
document.write(monChiffre = 20) + "<br>";

var unChiffre = 3;
document.write(unChiffre !== 2) + "<br>";

// autre maniere de tester le NOT (!===)

var autreChiffre = 4;
document.write(!(autreChiffre === 4)) + "<br>";