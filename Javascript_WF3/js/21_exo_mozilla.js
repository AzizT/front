// créer une fonction pour switcher l' image lorsqu' on clic dessus
var monImage = document.querySelector('img');
// demande a récuperer/stocker la première image de notre document ( pas toutes, mais juste la premiere (différent que querySelectorAll) => querySelectorAll('img')[0];)
console.log(monImage);
// pour que l' image s' affiche dans la console

// on va utiliser la methode addEventListener pour ajouter un ecouteur de click a l' image
// addEventListener attend 2 parametres: l' evenement puis l' action a réaliser

monImage.addEventListener('click', function(){
    // fonction anonyme car pas de nom
    // on va recuperer dans une variable maSrc, la valeur actuelle  de l' attribut de la balise img, c' est a dire, src
    // pour cela on va utiliser la methode getAttribute() (fonction native du navigateur)
    // l' argument attendu pour cette methode est le nom d' un attribut de balise html ( ici donc, src)

    // alert('click');

var maSrc = monImage.getAttribute('src');
console.log(maSrc);

    // si (la valeur de la variable maSrc est egale a "images/logo_firefox1.png"), Alors, alert("je suis l' image 1"); SINON alert(maSrc +" n' est pas l'image 1");
    // premiere version de cette condition pour tester

    // if(condition){
    //     instruction1
    // }else{
    //     instruction2
    // }
    // ci dessous, version intermédiaire faire pour test
    // if(maSrc === 'images/logo_firefox_1.png'){
    //     alert("je suis l' image 1, ma source se trouve bien dans "+maSrc);
    // }else{
    //     alert(" Je ne suis pas l'image 1");
    // }

    // version plus évoluée, avec changement d' image avec la methode setAttribute, avec toujours deux arguments: attibut ciblé (src) puis sa nouvelle valeur ( le logo 2) 

if(maSrc === 'images/logo_firefox_1.png'){
//  alert("je suis l' image 1, ma source se trouve bien dans "+maSrc);
    monImage.setAttribute('src', 'images/logo_firefox_2.png')
}else{
monImage.setAttribute('src', 'images/logo_firefox_1.png')
        // pour a nouveau la faire pivoter dans le bon sens

        // FIN DE LA FONCTION INVERSION DES IMAGES

        // on a verifié dans le code precedent, en utilisant le if else, si la valeur de l' attribut est bien la bonne par rapport au chemin de' l' image. Si ce n' est pas le cas, src revient a sa valeur initiale.
}
});
    /* prochaine fonction, ajout d' un message d' accueil personnalisé
    
    on va changer le titre de la page pour inclure un message pourle visiteur du site.
    Il sera conservé, même si l' utilisateur quitte le site. Il le retrouvera plus tard a son retour

    On va conserver ce message dans le cache du navigateur en utilisant l' API Webstorage ( blibliotheque, boite a outil du navigateur)

    On va aussi utiliser en option le bouton pour changer d' utilisateur avec nouveau message d' accueil en plus
    */

    // recuperer dans une variable, monTitre, le premier H1 du document et l' afficher en console

var monTitre = document.querySelector('h1');
console.log(monTitre);

    // créer la variable monBouton, pour pouvoir ensuite créer l' action

    var monBouton = document.querySelector('button');
    console.log(monBouton);

    // preparer la fonction du message d' accueil après click sur le bouton, ( invoquée, declenchée, executée )

    function definirNomUtilisateur(){
var monNom = prompt('Veuillez ecrire votre prenom');
localStorage.setItem('nomUtilisateur', monNom);
// permet de stocker le nom de l' utilisateur dans le cache du navigateur
monTitre.textContent = "Bienvenue " + monNom;
// textContent permet d' agir sur le texte
// on va maintenant tester si le nom n' est pas dans le cache. S' il n' y est pas, on demande, avec prompt, son nom a l' utilisateur. Si il y est ( nom déjà dans le cache ), on le récupere et on l' affiche dans le titre. On fera ce test juste après le click sur le bouton, invoquer la fonction définirNomUtilisateur().
}

if(!localStorage.getItem('nomUtilisateur')){
    definirNomUtilisateur();
}else{
    var nomEnregistre = localStorage.getItem('nomUtilisateur');
    monTitre.textContent = "Bienvenue a nouveau " +nomEnregistre;
}

monBouton.addEventListener('click', function(){
    definirNomUtilisateur();
})


    


/**
 EXPLICATION

 cette fonction prompt utilise la methode prompt() qui affiche une boite de dialogue, car elle nous permet le cas present de saisir une valeur et la stocker dans une variable, quand l' utilisateur click sur ok
 Dans notre exemple, on demande a l' utilisateur de saisir son nom. Ensuite on appelle l' API localStorage qui permet de stocker des données dans le navigateur pour pouvoir les réutiliser ulterieurement
 Nous utilisons la fonction setItem de cet API pour stocker la donnée qui nous ineteresse dans un conteneur appelé nomUtilisateur.
 La valeur stockée ici est la valeur de la variable monNom qui contient le nom saisi par l' utilisateur dans le prompt
 
 */

//  le bloc de la conditionnelle if else utilise l' opérateur de negation NON ( le point d' exclamation) pour verifier si le navigateur possede une donnée enregistrée appellée nomUtilisateur() ou pas. Sinon, la fonction definirNomUtilisateur() est invoquée pour créer cette donnée. Si elle existe, ce qui correspond au cas ou  l' utilisateur est deja venu sur la page, on la recupere avec la methode getItem(). Pour finir, on definit le contenu de textContent pour le titre avec une concatenation de chaine suivie du nom de l' utilisateur. Enfin, on associe le gestionnaire d' evenement click au bouton. Quand l' utilisateur cliquera sur le bouton, ça declenchera l' execution de la fonction definirNom Utilisateur(). Ce bouton permet donc a l' utilisateur de mofdifier son nom si il le souhaite.