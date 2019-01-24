function surfaceRectangle(){
    alert("Salut, on va calculer ensemble !");
    var longueur = prompt("Entre s' il te plait une longueur");
    var largeur = prompt("Et maintenant une largeur");
    resultat = longueur * largeur;
    alert("La surface du rectagle est de " + resultat );

    alert("Maintenant on va s' occuper du périmetre !");
    var longueur = prompt("Entre s' il te plait une longueur");
    var largeur = prompt("Et maintenant une largeur");
    resultat = (2 * longueur) + (2 * largeur) ;
    alert("Le périmetre du rectagle est de " + resultat );
}
    /* ----------------Correction Sandra------------------ 

    function surfaceRectangle(){
        var largeur;
        var longueur;

        largeur= prompt("Quelle est la largeur du rectangle ?");
        longueur= prompt("Quelle est la longueur ?");

        alert("La surface vaut " + longueur * largeur);
        alert("Le périmetre vaut " + 2 * (Number(longueur) + Number (largeur)));
    }
*/