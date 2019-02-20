/*
*****************************************operateurs arithmetiques***************************

- L' addition
On peut declarer plusieurs variables a la suite

    var nb1, nb2, resultat;
    nb1 = 10;
    nb2 = 5;

addition de nb1 et nb2 avec l' operateur +

    resultat = nb1 + nb2;
    console;log(resultat);
    document.write(resultat + "<br>");

soustraction de nb1 et nb2 avec l' operateur -

    resultat = nb1 - nb2;
    console.log(resultat);
    document.write(resultat + "<br>");

multiplication de nb1 et nb2 avec l' operateur *

    resultat = nb1 * nb2;
    console.log(resultat);
    document.write(resultat + "<br>");

division de nb1 et nb2 avec l' operateur /

    resultat = nb1 / nb2;
    console.log(resultat);
    document.write(resultat + "<br>");

Modulo de nb1 et nb2 avec l' operateur %

    resultat = nb1 % nb2;
    console.log(resultat);
    document.write(resultat + "<br>");

Reaffectation d' une valeur a nb1:

    nb1 = 11;
    resultat = nb1 % nb2;
    console.log(resultat);
    document.write(resultat);
    console.log("Le reste de la division de " + nb1 + " par" + nb2 + " est égal a" + resultat);
    document.write("Le reste de la division de " + nb1 + " par" + nb2 + " est égal a" + resultat);

Les ecritures simplifiées

    nb1 = 15;
    nb1 = nb1 + 5;
    console.log(nb1);
    document.write(nb1);

    nb1 += 10;
    console.log(nb1);
    document.write(nb1);

*/

var nb1, nb2, resultat;
    nb1 = 10;
    nb2 = 5;


    resultat = nb1 + nb2;
    console.log(resultat);
    document.write(resultat + "<br>");

    resultat = nb1 - nb2;
    console.log(resultat);
    document.write(resultat + "<br>");

    resultat = nb1 * nb2;
    console.log(resultat);
    document.write(resultat + "<br>");

    resultat = nb1 / nb2;
    console.log(resultat);
    document.write(resultat + "<br>");

    resultat = nb1 % nb2;
    console.log(resultat);
    document.write(resultat + "<br>");

    nb1 = 11;
    resultat = nb1 % nb2;
    console.log(resultat);
    document.write(resultat + "<br>");

    console.log("Le reste de la division de " + nb1 + " par " + nb2 + " est égal a " + resultat);
    document.write("Le reste de la division de " + nb1 + " par " + nb2 + " est égal a " + resultat + "<br>");

    nb1 = 15;
    nb1 = nb1 + 5;
    console.log(nb1);
    document.write(nb1 + "<br>");

    nb1 += 10;
    console.log(nb1);
    document.write(nb1);