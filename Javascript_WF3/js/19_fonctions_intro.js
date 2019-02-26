// en l'absence de point virgule en fin d'instruction, seule la ligne 1 s'executera, mais pas la suivante. Ici, l'alertes'execute bien mais pas celle du forEach
        // alert("il va y avoir une erreur");
        // [1,2].forEach(alert);
        // comme on a bien mis le ";" a la fin de chaque instruction, toutes les alertes s'executent bien


        // 1ere façon d'ecrire une fonction
        // function disBonjour(){
        //     document.write("bonjour");
        // }
        // disBonjour();
        // Pour declencher une fonction, on appelle ça invoquer une fonction, ainsi on indique au moteur javaScript d'executer la fonction car elle ne s'execute pas toute seule.

        // 2eme façon de declarer une fonction
        // disHello = function(){
        //     document.write("Hello!");
        // }
        // Invoquer une fonction (on invoque la fonction en ecrivant un couple de parentheses, c'est ce couple de parentheses qui declenche la fonction.)
        // disHello();
        // Ici la variable disHello, on peut dire qu'elle pointe du doigt la fonction elle meme, Si la fonction n'a pas son propre nom est appellée fonction anonyme.

        // 3eme façon de declarer une fonction et de l'invoquer.
        function disHola(){
            return"Hola!";
        } 
        salutation = disHola();
        document.write(salutation);
        // Ici on vient de stocker dans une variable externe a la fonction, la valeur créé par cette fonction 
    
        // -------------------------

        // fonction avec parametres:
        function addition(num1, num2){
            resultat = num1 + num2;
            return resultat; 
            // qui envoie le resultat a l'interieur de la fonction. 
        }
        // Dans l'invocation de la fonction, on envoie deux arguyments
        document.write( addition (2 , 6));
        
