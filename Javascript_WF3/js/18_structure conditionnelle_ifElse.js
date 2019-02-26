        // Si le parfum est du chocolat
        // alors affiche une alerte qui contient: "super j'adore la glace au chocolat"
        // sinon on affiche une alorte qui contient "oh, j'aurais preferé le chocolat!"

        // structure conditionnelle "SI SINON"
        /* if(condition){
            Alors
            instruction1
        }    
        else{
             instruction2
        }
        */ 
        // structure conditionnelle finale:

        parfumGlace = "chocolat";
        if(parfumGlace == "chocolat"){
            alert("super, j'adore la glace au chocolat");
        }
        else{
            alert("oh, j'aurais preferé le chocolat!");
        }
        
        porteFermee = true;
        if(porteFermee){
            alert("ouvre la porte!");
        }

        melon = false;
        if(melon){
            alert("je mange du melon!");
        }else
            alert("je mange des chips!");

        // Structure conditionnelle SI SINON SI   
        // Si j'ai du melon alors je mange du melon, sinon si j'ai des chips alors je mange des chips, sinon je ne mange rien.

        var melon = false, chips = true;
        if(melon){
            alert("je mange du melon");
        }
        else if(chips){
            alert("je mange des chips");
        }else{
            alert("je ne mange rien");
        }

        var frigo = {
            melon: 1,
            papaye: 1,
            pasteque: 0,
            parme: 2, 
            fromage: 1
        };

        // Si j'ai du melon et du jambon de parme
        if(frigo.melon && frigo.parme){
            alert("Je mange du melon au jambon de parme");
        }
        // Sinon si j'ai du fromage
        else if(frigo.fromage){
            alert("Je mange du fromage");
        }
        // Sinon si j'ai de la pasteque ou de la papaye
        else { 
            if(frigo.pasteque || Frigo.papaye){ 
            alert("Je mange de la pasteque ou de la papaye");
        }
        else{
            alert("je ne mange rien");
        }
}
