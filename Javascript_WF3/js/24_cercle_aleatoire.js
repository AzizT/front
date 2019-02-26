
var btn = document.querySelector('button');
var canvas = document.querySelector('canvas');
var feuille = canvas.getContext('2d');

var WIDTH = document.documentElement.clientWidth;
var HEIGHT = document.documentElement.clientHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

function random(number){
    return Math.floor(Math.random()* number);
    // Math.floor convertit en nombre entier.
    // ici, on convertit en nombre entier ( sans virgule) le nombre randomisé et multiplié par la valeur number (qui est l' argument utilisé en début de fonction)
}

function dessineUnCercle(){
    feuille.clearRect(0,0, WIDTH, HEIGHT);
    // pour effacer le rectangle du contenu du canvas
    feuille.beginPath();
    feuille.fillStyle = 'hsla(' + random(360) + ', 100%, 50%, .5)';
    // pour rendre la couleur aleatoire. ci dessous lien pour les couleurs
    // http://www.workwithcolor.com/hsl-color-picker-01.htm
    // on va dessiner un cercle de 30px de diametre, positionné a 100px en x et 100px en y de l' angle gauche du canvas
    // feuille.arc(x,y, radius, startAngle, endAngle)

    feuille.arc(random(WIDTH), random(HEIGHT), random(150), 0, 2 * Math.PI);
    // dimension et emplacement du cercle. ici, il va se promener aleatoirement dans toute la largeur et la hauteur
    feuille.fill();
    // commande pour remplir le cercle

}
// fin de la fonction, et ensuite, a l' exterieur, la commande pour le click
btn.addEventListener('click', dessineUnCercle);