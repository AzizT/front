document.querySelector('html')// on indique au query secector qu'il doit s'attacher a la premiere balise html, donc pour dire ensuite a n'importe quel endroit de la page, le clic declenchera notre fonction!
    // addEventListener attend deux arguments, le 1er ce sera l'évenement qui va survenir, et le 2eme, l'action qu'on veut declencher l'orsque l'enevement survient.
            .addEventListener('click', function(){
                alert("tu as cliqué")
            });
            // dans ce cas ci on met le ";" a la fin de toute l'instruction
    
