/**var entree=prompt("Ecris quelque chose, sauf; OUI ou NON !");
if(entree === "oui" || entree === "non"){
    document.write("Dommage, c' est perdu");
}
else{while
    (prompt("Continuons"));
}


 Correction sandra
 */
var disMoi = "";
var i = 0;

while((disMoi!=="oui") && (disMoi !== "non"))
{
    disMoi=prompt("Alors on joue au ni oui ni non ?");
    document.write(disMoi+" pour la " +i+ "° fois, dis moi oui ou non <br>");
    i++
}
document.write("fini");


