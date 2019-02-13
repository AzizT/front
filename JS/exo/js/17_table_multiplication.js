chiffre=prompt("Entre un chiffre");
if(chiffre<2 || chiffre>9){
    document.write("le chiffre entré doit etre compris entre 2 et 9")
}else{
for(i=1; i<=10; i++) {
document.write(chiffre+" x "+i+" = "+chiffre*i+"<br><br>");}
}
/**
 var choix = prompt("Choisi un nombre :");
 if ((choix >= 2) && (choix <= 9)){
     for (i=1; i<=10; i++){
         var res =choix*i;
         document.write(choix+ "x" +i+ "=" + res+ "<br>");
     }
 }else{
     document;write("<h4>Le chiffre doit etre entre 2 et 9</h4>");
 }
 */