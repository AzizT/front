var para = document.querySelector('p');

para.addEventListener('click', changeNom);

function changeNom(){
    var nom = prompt('Entre ton prénom');
    para.textContent = "Désormais, tu s' appelleras "+nom;
}
/*
On ajoute un écouteur d' événement
Elle attend deux arguments:
- le premier évenement attendu, qui va declencher l' action qui...
- ... sera justement notre second argument
*/