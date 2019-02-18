/* Declaration des variables
Rechrche du bouton dans l' arbre DOM
Document Object Model, est une interface de programmation d' application (API) pour des documents HTML valides et XML bien formés. Il définit la structure logique d un document ( au sens large du terme) et la manière d' y accéder et de le manipuler
*/

var bouton = document.getElementById('toggle-rectangle');
// recherche du rectangle dans l' arbre DOM
var rectangle = document.querySelector('.rectangle');

/*
La Fonction
1- fonction au click sur le bouton
La methode .toggle() va ajouter ou supprimer la class ( a la manière d' un interrupteur)
*/
function surClicBouton(){
    rectangle.classList.toggle('hide');
}
// fonction au double-click sur le rectangle

function auDoubleClicRectangle(){
    rectangle.classList.add('good');
}
// a l' entree du survol du rectangle
//  la methode .add() va ajouter la class css

function auSurvolSourisRectangle(){
    rectangle.classList.add('important');
}
/*
A la sortie du survol du rectangle
La méthode .remove() va ajouter la class CSS
*/

function aSortiSourisRectangle(){
    rectangle.classList.remove('good');
    rectangle.classList.remove('important');
}
/*
*************Ecouteurs d' événements, définir nos évenements************
- parametres: l' évènement
2nd parametre: la focntion executer
Installation d' un gestionnaire d' evenement au clic sur le bouton
*/
bouton.addEventListener('click', surClicBouton);
// installation d' un gestionnaire d' evenement au double clic sur le rectangle
rectangle.addEventListener('dblclick', auDoubleClicRectangle);
// installation d' un gestionnaire d' évenement au survol sur le rectangle
rectangle.addEventListener('mouseover', auSurvolSourisRectangle);
// installation d' un gestionnaire d' evenement a la sortie du survol du rectangle
rectangle.addEventListener('mouseout', aSortieSourisRectangle);