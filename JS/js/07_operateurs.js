/* -------------L' opérateur ET: && et AND

_ Si je cumule 2 conditions:
=> prenom === prenomLogin
=> monAge === ageLogin

Pour que les deux correspondent puissent etre validés, il faut les associer.
if((prenomLogin === prenom) && (ageLogin === monAge)){
    ***************code*************
    ***************code************
    Je ne rentre ici que les deux positions vraies
}
=> si A est Faux et que B est faux => Faux
=> si A est Vrai et que B est Faux => Faux
=> si A est Faux et que B est Vrai => Faux
=> si A est Vrai et que B est Vrai => Vrai

A utiliser pour un logIn par exemple


----------------L' opérateur OU: || ou OR


if((C) || (D)){
    ************code**********
}

=> si C est Faux et D est Faux => Faux
=> si C est Faux et que D est Vrai => Vrai
=> si C est Vrai et que D est Faux => Vrai
=> si C est Vrai et que D est Vrai => Faux


-----------------L' opérateur ! signifie: le contraire de la var
                utilisateurLog = True;

if(!utilisateurLog){
    ********code*************
    Si l' utilisateur n' est pas loggé;
}
Ce qui revient a ecrire
if(utilisateur == false){
    ********code***********
    si l' utilisateur n' est pas loggé
}




*/