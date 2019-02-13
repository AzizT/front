var branche=prompt("choix du nombre d' étage du sapin");
for(var etage=1; etage<=branche; etage++){
    for(var i=0; i<etage+3; i++){
        for(var nb_etoile=1; nb_etoile<=((etage+i)*2)-1; nb_etoile++){
            document.getElementById('sapin').innerHTML+='*';
            sapin.style.color="green";
        }
        document.getElementById('sapin').innerHTML+="<br>";
    }
    
}
for(var s=1; s<=branche; s++){
    document.getElementById("sapin").innerHTML+="||||";
    document.getElementById("sapin").innerHTML+="<br>";
}
/**
 La proprieté element.innerHTML de l' Element recupere ou définit la syntaxe HTML decrivant les descendants de l' élément
 La methode getElementById() de Document renvoie un objet Element représentant l' élément dont la propriete id correspond a la chaine de caracteres specifiée. Etant donné que les ID d' element doivent etre uniques
 S' ils sont spécifiés ils constituent un moyen d' acceder rapidement a un element spécifique
 */