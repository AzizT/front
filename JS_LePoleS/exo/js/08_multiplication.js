function multiplie(){
var a = 3;
var b = 2;
var x = 8;

resultat1 = x * a;
alert(resultat1);
resultat2 = x * b;
alert(resultat2);

var produit = Number(prompt("Entre un chiffre"));
resultat = x * produit;

}
function affiche(){
    alert(resultat);
}
/**
 -----------------------Correction----------------------

var a = 3;
var b = 2;

function multiplie(x = 8){
    return 3*x;
}

function affiche(){
    alert(multiplie (a));
    alert(multiplie (b));
    alert(multiplie ());
}
 */