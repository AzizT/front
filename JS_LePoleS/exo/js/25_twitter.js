// on selectionne l' élément textarea et le p#counterblock
// declaration des variables
var tweetText = document.querySelector('#tweetContent');
var tweetCount = document.getElementById('counterBlock');

function decompte() {
    // la fonction calcule la longueur de la chaine de caractere contenue dans le textarea
    var decompte = 140 - tweetText.value.length;
    // et afficher cette valeur dans la balise p#counterBlock grace a innerHTML
    tweetCount.innerHTML = decompte;


    // si le count descend sous 0, on ajoute la class red a la balise p#tweetCount
    if(decompte < 0){
        tweetCount.classList.add("red");
    }else if(decompte>=0){
        tweetCount.classList.remove("red");
    }
}
// on pose un écouteur d' evenement keyup sur le textarea. on declenche la fonction decompte quand l' evenement se produit et au chargement de la page
tweetText.addEventListener('keyup', decompte);
// keyup permet d' etre a l' écoute des touches du clavier
decompte();