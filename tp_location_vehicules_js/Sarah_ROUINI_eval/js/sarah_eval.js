$(function () {
    // console.log('hello');
    $('#btn_nav').click(function(){
        $('ul').css({
            "background": "lightgrey",
          });
        $('div.titre').toggleClass('affiche');
    }) //Fin fonction
}) // Fin Scope