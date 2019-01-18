// alert('js okay');pour vérifier le link

/*Syntaxe de base*/

// deux slashs pour un commentaire uniligne
/*
commentaire sur plusieurs lignes
*/
//--declaration d' une variable en JS
var Prenom;

//-- Affecter une valeur
var Prenom ='Alpha';

//--Obligation du ";" a la fin de chaque instruction ( mais on peut les additionner sur une même ligne)
var instruction_1;
var instruction_2, instruction_3;

//-- Afficher une boite de dialogue ( 2 façons)
alert('Wow ! Tu es sur ma page !');
window.alert('Fouyou ! Encore toi !');

//-- Afficher dans la console/inspecteur ( ici, la valeur de la variable Prenom)
console.log(Prenom);

//-- Afficher du texte dans une page web
document.write('Bonjour a tous' + '<br>');

//-- Demander a l' utilisateur une valeur (2 façons)
var retournerValeur = window.prompt('Question: Quel jour sommes nous ?', 'Saisissez le jour de la semaine');
var retournerValeur = prompt('Question: Quel jour sommes nous ?', 'Saisissez le jour de la semaine');

//-- Attention; JS est sensible a la casse ( toujours la vérifier )
//-- mavariable= / =maVariable

//-- Une variable ne commence JAMAIS avec un chiffre + ne doit contenir que des caractères alphanumériques, et ne peut-etre un mot reservé (tel que var, for...des éléments natifs de JS)
//-- https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s

//-- Une variable peut-etre declarée de maniere explicite
var prenom ='Alpha';
//-- ou implicite
prenom ='Alpha';

//--Chaine de caracteres (string)
var vacances ='2017';
var destination ='Guadalajara';

//-- Un nombre entier (integrer)
var annee = 2017;

//-- Un nombre decimal ( float)
var nombre_a_virgule = -5.32;

//-- Un boolean ( = TRUE ou FALSE / Vrai ou Faux)
var unBoolean = false; //-- ou true si on veut

//-- Les constantes
/* La declaration const permet de créer une constante accessible uniquement en lecture. Contrairement a une variable, sa valeur ne peut etre modifiée par reaffectation plus bas dans le code.
Une constante ne peut pas etre declarée a nouveau dans le script
Par convention, elles sont en majuscules */
const PAYS ='France';

// typeof(annee);
// typeof(destination);
// typeof(nombre_a_virgule);
// typeof(unBoolean);

console.log(annee);

//--INtro JS et algorithmes

/*********************************La Concatenation******************************************** */

var x ='aziz';
console.log('Bonjour ' + x + ' Tobbal, comment vas-tu ?');

//-- exemple 1
var annee = 2017;
var mois = 3;
var calcul = annee + '/' + mois;
console.log(calcul);
document.write(calcul + '<br>');

//-- Je reaffecte une valeur a ma variable mois
mois = 7;
var calcul = annee + '/' + mois;
document.write(calcul + '<br>');

//-- 2 exemple
var DebutDePhrase = "Aujourd' hui";
var NombreDeStagiaires =" 9 ";
var SuiteDePhrase ="stagiaires";
var FinDePhrase =" sont présents.<br>";

//-- Nous souhaitons maintenant, grace a la concatenation, afficher tout ce petit monde, en un seul morceau.
document.write(DebutDePhrase + NombreDeStagiaires + SuiteDePhrase + FinDePhrase);

//--Exo: creer une concatenation a partir des éléments suivants

var phrase1 = "Je m' appelle ";
var phrase2 = "Sandra et j' ai ";
var age = 375;
var phrase3 = " ans";
document.write(phrase1 + phrase2 + age + phrase3 + '<br>');

/*******************************Les opérateurs arithmetiques************************** */

//-- Declaration de plusieurs variables a la suite
var nb1, nb2, resultat;
nb1 = 10;
nb2 = 5;
resultat = nb1 + nb2;
console.log(resultat);
document.write(resultat +'<br>');

//--Soustraction

resultat = nb1 - nb2;
console.log(resultat);
document.write(resultat +'<br>');

//-- Multiplication
resultat = nb1 * nb2;
console.log(resultat);
document.write(resultat +'<br>');

//--Division
resultat = nb1 / nb2;
console.log(resultat);
document.write(resultat +'<br>');

//-- Le Modulo, qui retourne le reste de la division
nb1 =11;
resultat = nb1 % nb2;
console.log(resultat);
document.write(resultat +'<br>');

//-- Les ecritures simplifiées
nb1 =15;
nb1 = nb1 + 5;
console.log(nb1);
document.write(nb1 +'<br>');

nb1 + 5;//--équivalent a ecrire nb1 = nb1 + 5;
console.log(nb1);
document.write(nb1 +'<br>');
//-- fonctionne avec le -, le * etc...

//-- L' incrementation et decrementation

var nb1 =1;
nb1 = nb1 + 1;
console.log(nb1);
document.write(nb1 +'<br>');
//--ecriture simplifiée
nb1+
console.log(nb1);
document.write(nb1 +'<br>');

nb1 = nb1 - 1;
console.log(nb1);
document.write(nb1 +'<br>');
//--ecriture simplifiée
nb1-
console.log(nb1);
document.write(nb1 +'<br>');

//--Les conditions
// var MajoriteFR = 18;
// if(MajoriteFR >= 18){
//     alert("Bienvenue");
// } else{alert("Dégage !");
// }

//--
// alert('Salut, quel age as-tu ?');
// var MajoriteFR = 18;
var MajoriteFR =Number(prompt("Salut, quel age as-tu ?"));
// Number oblige a ecrire un nombre et pas autre chose

if(MajoriteFR >= 18){
    alert("Bienvenue");
} else{
        alert("Désolé, tu n'es pas majeur");
        document.location.href="https://www.lagranderecre.fr/"; 
      };


// Correction
// var age = prompt("Salut, quel age as-tu ?", "<saisissez votre age>");
// if(age >= 18){
//     alert("Bienvenue sur mon site");
// }else{
//     document.location.href="https://www.google.com/"
// };