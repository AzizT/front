/**
alert("Bonjour ! Tu vas devoir me donner trois informations.");
var heure = Number(prompt("Donne moi s' il te plait un nombre pour l' heure"));
var minute = Number(prompt("Un autre pour les minutes"));
var seconde = Number(prompt("Pour finir, celui pour les secondes"));

if
    ((heure>=0) && (heure<24) && (minute>=0) && (minute<60) && (seconde>=0) && (seconde<60)) { seconde++;
        if(seconde===60){
            seconde=0;
            minute++;
            if(minute===60){
                minute=0;
            }
        }
    }
    suivre même logique jusqu' a la fin + corrigé
     * https://github.com/oc-courses/intro-javascript/blob/gh-pages/chapitre3_exercice3.js


     Ci dessous, corrigé Sandra*/

     var heure=prompt("Entrez une heure");
     var minute=prompt("Entrez les minutes");
     var seconde=prompt("Entrez les secondes");

     if((heure=>0) && (heure<=23) && (minute>=0) && (minute<=59) && (minute<=59)){
         seconde++;
        if(seconde===60){
            seconde=0;
            minute++;
            if(minute===60){
                minute=0;
                heure++;
                if(heure===24){
                    heure=0;
                }
            }
        }
        document.write("<h3>Dans une seconde, il sera "+heure+"h "+minute+"mn "+seconde+"s</h3>");
     }else{
         document.write("heure incorrect");
     }
