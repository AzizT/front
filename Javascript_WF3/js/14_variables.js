var a = 10;
a = 8;
// var réassignée, ecrasée
alert(a);
// sans guillemets, valeur de var, si guillemets: string; alert('a');

// pour tester une variable, on ouvre la console, et on y ecrit le nom de cette variable, puis "enter". On peut aussi la tester avec un console.log directement dans le script
console.log(a);

var b = 4;
console.log(b);

ajoute = a+b;
alert(ajoute);
console.log(ajoute);

// ajoute = a+c ???
// si nom de var n' existe pas; reference error ( not defined)

/*
Autre façon d' ecrire une variable:
var laVariable;
laVariable = 'Wechrak';
*/

// declaration de variable, puis assignation d' opération a effectuer
soustrait = a-b;
alert(soustrait);
console.log(soustrait);
// la console affichera 4

multiplie = a*b;
alert(multiplie);
console.log(multiplie);
//  la console affichera 32

var message;
message = 'hello';
message = 'world';
var hello = 'hello world';
alert=(message);
message = hello;
// même var, plusieurs fois réassignée ( et dans ce cas, var message et var hello, ont le même contenu)

// concatenation ( ajouter des string a des valeurs de var)

prenom = 'Gerard';
age = 22;
// pas de quote car c' est un nombre
console.log(prenom+' a '+age+' ans');
// pour l' ecrire directement sur la page web; document.write
document.write(prenom+' a '+age+' ans');

// ci dessous, on va demander a la console si le chiffre 12 est inferieur a 13. Ce dernier va repondre avec la valeur booléenne: TRUE ou FALSE ( dans ce cas, TRUE)

console.log(12 <= 13);