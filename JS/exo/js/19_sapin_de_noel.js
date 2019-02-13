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