var maVariable = 10;
console.log(typeof maVariable);
// pour connaitre le type de la variable, ici, number

var monTexte = 'soleil';
console.log(typeof monTexte);
// un string ci dessus

console.log(isNaN(100));
// répond False

console.log(isNaN('100'));
// même si 100 est devenu un strig, la console répondra false, car elle fait une conversion ( en number ) au préalable

console.log(isNaN("j' ai 100 ans"));
// devient true car 100 n' est plus isolé, et n' est plus converti. Devient un string a part entiere

var monBooleen = true;
console.log(typeof monBooleen);
// répond: boolean

var maListe = ['pommes', 'poires', 'bananes', 20];
console.log(typeof maListe);
// répond: object
/*
Et cela induit que cet objet va avoir des proprietes pour le navigateur
Ici; un Array ( un tableau)
On va le tester avec un if
Structure du test if =>
FRANCAIS SIMPLE
si (qlq chose est vrai ou faux){
    alors
    fais ceci;
    fais cela;
    etc...
}
PSEUDO CODE algorithmique
Si(condition){
    alors
    instruction 1;
    instruction 2;
}
JAVASCRIPT ci dessous
si(le nom du constructeur est égal a Array){
    alors
    affiche en console la chaine de caractere array;
}
*/
if(maListe.constructor.name == 'Array'){
    console.log('Array');
}


