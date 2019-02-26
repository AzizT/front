
var btn = document.querySelector('button');
var canvas = document.querySelector('canvas');
var feuille = canvas.getContext('2d');

var WIDTH = document.documentElement.clientWidth;
var HEIGHT = document.documentElement.clientHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

function dessineUnCercle(){
    feuille.clearRect(0,0, WIDTH, HEIGHT);
    // pour effacer le rectangle du contenu du canvas
    feuille.beginPath();
    feuille.fillStyle = 'rgba(255, 0, 0, .5)';

    // on va dessiner un cercle de 30px de diametre, positionné a 100px en x et 100px en y de l' angle gauche du canvas
    // feuille.arc(x,y, radius, startAngle, endAngle)

    feuille.arc(100, 100, 30, 0, 2 * Math.PI);
    // dimension et emplacement du cercle
    feuille.fill();
    // commande pour remplir le cercle

}
// fin de la fonction, et ensuite, a l' exterieur, la commande pour le click
btn.addEventListener('click', dessineUnCercle);