for(var i =0; i<5; i++){
    console.log(i);
    document.write(i + "<br>");
}
/*
Dans l' ordre:
- initialisation de la variable i qui au déârt sera égale a 0
- Tant que i est inferieur a 5, on execute la boucle
- a la fin de chaque boucle, on incremente de 1

=> la boucle va s' executer 5 fois, car la 6è fois, i sera egal a 5, et la boucle ne s' executera donc plus
*/

// autre exemple de boucle, avec un tableau

tableau = ['chien', 'chat', 'souris', 'lapin', 'tortue'];
// on va utiliser la methode length, qui va nous permettre de recuperer le nombre d' elements que le tableau contient

for( var j=0; j < tableau.length; j++){
    document.write(tableau[j] + "<br>");
    // affiche chaque valeur du tableau
}

// methode toUpperCase, pour mettre en majuscules les élements d' un tableau

var noms = ["fred", "marc", "habib", "samira"];
var upper = [];

for(var k=0, n = noms.length; k<n; k++){
    // ci dessus, virgule au lieu de point virgule car il sépare deux variables qu' on initialise
    upper[k] = noms[k].toUpperCase();
}
document.write(upper  + "<br>");

// derniere boucle for, tres frequente

for(var m = 0; m<10; m++){
    alert('m contient la valeur: ' +m);
}