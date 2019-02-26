// cree un tableau
var monTableau = ['fraise', 'orange', 'melon'];
// type d' objet
console.log(typeof monTableau);
// le nom du constructeur
if(monTableau.constructor.name == 'Array'){
    console.log('Array');
}
// pour recuperer une info stockée dans un tableau, par exemple 'orange', on va utiliser un index ( ou une clé) de tableau

console.log(monTableau[1]);
// dans les objets ( tableau ici ), on compte toujours en colmmençant par zéro. Index de fraise ci dessus = 0 etc...

// création d' un tableau associatif ( un dictionnaire)

traduc = {
    "fraise" : "strawberry",
    "pomme" : "apple",
    "poire" : "pear"
}
console.log(traduc.pomme);

frigo = {
     "fruits" : ["ananas", "mangue", "papaye"],
     "legumes" : ["poireau", "courgette"],
     "laitages" : ["yaourt", "lait"]
};
console.log(frigo.legumes[1]);

mesFruits = frigo.fruits;
console.log(mesFruits);
// va afficher toute la liste des fruits. Autre maniere de recuperer la liste des legumes

mesLegumes = frigo["legumes"];
console.log(mesLegumes);
