/*
Javascript fournit 3 opérations permettant de comparer des valeurs:
    - l' égalité stricte ( ou identité ou triple égal) utilisant "===".
    - l' égalité faible ( ou double égal) utilisant "==".
    - Object.is() (ajouté avec ECMAScript 2015).

L' opérateur de comparaison == signifie "égal à".
Il permet de vérifier que les valeurs de 2 variables sont identiques.
Exemple:
var nb1 = 123;
var nb2 = 123;
console.log(nb1 == nb2);
La console doit retourner TRUE.

L' opérateur de comparaison === signifie " strictement égal à"
Il permet de vérifier la VALEUR et le TYPE.
Exemple:
console.log(nb1 === nb2);
La console va retourner TRUE

L' opérateur != signifie, "différent de" en VALEUR
Exemple:
console.log(nb1 != nb2);
La console va retourner FALSE

L' opérateur !== signifie " strictement différent " en VALEUR et en TYPE
Exemple:
console.log(nb1 !== nb2);
Retourne FALSE

****************************************exo*************************

J' arrive sur un espace sécurisé au moyen du prénom et de l' age.
Je dois saisir un prénom et mon age pour etre authentifié sur le site ( les infos sont en BDD, ici dans mes variables prénom et age)
En cas d echec, une alerte m' informe du problème.
Si tout se passe bien, un message de bienvenue s' affiche.

*/

var id = "aziz";
var age = "50";
var id2 = prompt("Veuillez saisir votre prénom");
var age2 = prompt("Veuillez saisir votre age");
if(id===id2 && age===age2){
    alert("bienvenue Aziz, ravi de te revoir");
}else{
    alert("Désolé, votre identifiant ou age ne sont pas reconnus");
}
/*
-----------------------correction sandra------------------------
var prenom, monAge;
prenom = "aziz";
monAge = 25;
var prenomLogin = prompt("Quel est votre prénom ?");
if(prenomLogin === prenom){
    alert("test");
}
var ageLogin = parseInt(prompt(" Quel est votre age ?"));
if(ageLogin === monAge){
    alert("Bienvenue" + prenomLogin);
}else{
    alert(Erreur d' age);
}else{
    alert("attention, prenom non reconnu");
}

------------------autre possibilité-------------------------

var prenom, monAge;
prenom= "aziz";
monAge = 50;
mdp = "frumpk";
var prenomLogin = prompt("Quel est votre prenom ?");
if(prenomLogin === prenom){
    var ageLogin === monAge){
        var mdpLogin = prompt("Quel est le mot de passe");
        if(mdpLogin === mdp){
            alert("bienvenue " + prenomLogin);
        }else{
            alert("problème mot de passe!");
        }
    }else{
        alert("attention, erreur d' age");
    }
}else{
    
}
*/