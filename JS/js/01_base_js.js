
/* 
---------------- Syntaxe de base--------------

- Si on met plusieurs instructions sur une seule ligne, il faut les séparer avec un";" et non une ",".
- Deux manières d' afficher une boite de dialogue:
    - alert("Super, tu es arrivé sur mon iste");
    - window.alert("Super, tu es arrivé sur mon nouveau site");

- L' affichage dans la console se fait avec console.log(nom de variable);
      A CONDITION D AVOIR DEFINI AU PREALABLE LE NOM DE LA VARIAVLE, MAIS SANS VAR DEVANT.

- Pour l' affichage sur une page web ( sans une fenetre pop-up ), c' avec:
    - document.write("Cool, ça fonctionne toujours !");

- Pour demander a l' utilisateur une valeur, il existe deux manières:
    - window.prompt("Quel jour sommes nous ?", "Jour de la semaine");
    - prompt("Quel jour serons nous demain ?", "Demain sera...");

- Et pour manipuler cette même valeur, je n' oublie pas de la stocker:
    - var jour = prompt("Quel jour sommes nous ?", "Jour de la semaine");
      console.log(jour);
      document.write(jour);
    pas de guillemet dans les parentheses pour qu' il affiche la valeur de la variable, sinon STRING

- maVariable = camel case; ma_variable = snake case

- une variable ne peut commencer par un chiffre, ne peut contenir que des alphanumériques, et utiliser un mot reservé (var, const, for ...)

- declaration de variable de manière explicite:
    - var fruit = "fraise";
    - var fruit_2 = "coco";
    ou implicite:
        - haribo = "tagada";

----------------------------------Types de variables---------------------------

- STRING = chaine de caractères. L' objet global "string" est un constructeur de chaine de caractères
    - var vacances = "2017";
      var destination = "Australie";

- Un nombre entier ( integer ou int ) ou decimal (float)
    - var annee = "2017";
    - var nombre_a_virgule = -5.32;

- Le booleen: boolean = vrai ou faux = TRUE/FALSE. C' est un objet permettant de représenter une valeur booléenne
    - var unBooleen = FALSE; ( ou TRUE)

- Les constantes. Leur declaration, const, permet de créer une constante accessible uniquement en lecture. Contrairement a une variable, sa valeur ne peut plus etre modifiée par réaffectation ultérieurement.
Une constante ne peut etre declarée a nouveau dans le même script.
Par convention, les constantes sont ecrites en majuscules:
    - const PAYS = "France"; *******string
      const AN = "2017"; ********string
      const BIRTH = 2020; **********nombre

- TYPEOF permet de connaitre le type de ma variable
    - console.log('vacances'); *****************vacances
      console.log(typeof "vacances"); ***************string
      console.log('annee'); ************annee
      console.log(typeof 2019);***************number

- En JS, les variables sont auto-typées. On peut convertir une variable de type NUMBER en STRING, et inversement, avec les fonctions natives
    - fonction parseInt(), renvoie a un entier a partir d' une chaine de caractères. Cette focntion analyse une chaine de caractères fournie en argument, et renvoie a un entier dans une base de données
    var unChiffre = "12";
    console.log(unChiffre);
    console.log(typeof unChiffre);

Transformation de la chaine de string en number
    unChiffre = parseInt(unChiffre);
    console.log(unChiffre);
    console.log(typeof "unChiffre");

Réaffecter une valeur
    unChiffre ="12.22";
    console.log(unChiffre);
    console.log(typeof unChiffre);

Transformation du STRING en FLOAT.
La fonction parseFloat permet de transformer une chaine de caractères en un nombre flottant après avoir analysé celle ci(parsing)
Un nombre flottant obtenu a partir de l' analyse de la chaine de caractères. Si le premier caractère ne permet pas d' obtenir un nombre, ce sera la valeur NAN (not a Number) qui sera renvoyée
    unChiffre = parseFloat(unChiffre);
    console.log(unChiffre);
    console.log(typeof unChiffre);

Transformation d' un NUMBER en STRING: méthode toString( qui oblige tout nombre a se transformer en chaine STRING.
Elle permet de donner un aperçu d' un objet instancié.
    var nb_en_lettres = 258;
    console.log(nb_en_lettres);
    console.log(typeof nb_en_lettres);

    var nb_en_lettres = nb_en_lettres.toString();
    console.log(nb_en_lettres);
    console.log(typeof nb_en_lettres);




*/
document.write("Cool, ça fonctionne toujours !" + "</br>");

var nb_en_lettres = 258;
    console.log(nb_en_lettres);
    console.log(typeof nb_en_lettres);

    var nb_en_lettres = nb_en_lettres.toString();
    console.log(nb_en_lettres);
    console.log(typeof nb_en_lettres);

