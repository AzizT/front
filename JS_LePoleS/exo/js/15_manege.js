// pour tour de manège de 1 a 10
// for( tour= 1 ; tour<=10; tour++)
// {
// document.write("C' est le tour de manège n°"+tour+"<br><br>");
// }

var tour=prompt("Entre un chiffre pour le tour de manège");
for(tour=tour; tour<=10; tour++)
{
    document.write("C' est le tour de manège n°"+tour+"<br><br>");
}

/**avec la while
 var question=parseInt(prompt("combien de tours voulez-vous ?"));
 var compteur=1;
 while(compteur<=question){
     document.write("C' est le tour de manège n°"+tour+"<br><br>");
     compteur++;
 }

Autre boucle for
var nbTours=parseInt(prompt("combien de tours a faire"));
for(var tour =1; tour <= nbTours; tour++){
    document.write("C' est le nombre de tours n°"+tour+ "<br>");
}


 */