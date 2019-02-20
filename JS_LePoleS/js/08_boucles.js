/* ***********************Les boucles**************************

Elles permettent de répéter des actions simplement et rapidement.
Une boucle peut etre vue comme une version informatique de "copier N lignes" ou de faire "X fois qlq chose"
    Exemple: En JS on peut traduire " faire 5 pas vers l' Est" avec la boucle suivante:
    var pas;
    for(pas=0; pas < 5; pas++){
        console.log("faire un pas vers l' Est");
    }
    Cette boucle sera executée 5 fois
    A chaque tour, la variable "pas" augmentera de 1
    Lorsqu' elle atteindra la valeur de 5, la boucle se terminera

Il y a différents types de boucles mais elles se ressemblent toutes au sens ou elles répètent une action un certain nombre de fois ( ce nombre peut aussi etre 0)

Les différents types de boucles permettent d' utiliser différentes façons de commencer et de terminer une boucle.
Chaque boucle pourra etre utilisée en fonction de la situation et du problème que l' on cherche a résoudre.

**********************************La boucle FOR***************************

for(3arguments) {
    ***code********
}
l' objet "argument" est un objet, semblable a un tableau correspondant aux arguments passés a une fonction
L' objet "argument" est une variable Local( intrasèque et inhérente aux fonctions disponibles dans toutes les fonctions, qui ne sont pas des fonctions FLECHEES)

1. initialise un compteur a partir de combien je compte ( par défaut, le compteur est la variable "i")
2. la condition a vérifier qui doit etre vraie (TRUE)
3. le pas d' incrémentation ( combien j' ajoute a chaque tour, généralement 1, donc i++)

for(var i=1; i<= 10 i+=2){
    document.write("<p>Instruction exécutée : "+i+"</p>");
}

*************************La boucle WHILE (tant que)**********************

Tres utilisée quand on ne connait pas le nombre de tours de boucles a l' avance

var j=1;
while(j<=10){
    document.write("<hr/><p>Instruction executée: "+j+"</p>");
    j++;
}

************************EXO***************
J' ai 1000€ sur mon compte. Chaque mois j' ajoute 50€
Combien de temps faut il pour avoir 2000€ sur mon compte
 
****************avec la boucle for************

for(var i=1000; i<=2000; i+=50){
    document.write("le prochain mois j' aurais "+i+" <br><br>");
}{
    document.write("Il me faudra donc 20 mois pour atteindre mon objectif");
}
*******************************while
var i= 1000;
while(i<=2000){
    document.write("le prochain mois j' aurais "+i+" € <br><br>");
    i+=50;
}{
    document.write("Il me faudra donc 20 mois pour atteindre mon objectif");
    }

    *******************correction sandra****************
    **********************while**********************

    var monCompte = 1000;
    var temps = 0;
    while(monCompte <2000){
        monCompte += 50;
        temps++;
    }
    document.write("<h3>Sur mon compte: " +monCompte+ "</h3>");
    document.write("Jusqu' a 2000€, il me faut : "+temps+" mois<br><br>");
    document.write("Jusqu' a 2000€, il me faut : "+(temps/12)+"  années<br><br>");

    *********************************for**********************

    var tps= 0;
    for(var meSous=1000; meSous<2000; meSous+=50){
        document.write("Ce mois j' ai "+meSous+ "<br></br>");
        tps++;
    }
    document.write("Il m' aura fallu " +tps+ " mois pour atteindre cet objectif<br></br>");
    */