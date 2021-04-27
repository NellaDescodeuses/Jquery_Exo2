/*
le doc bootstrap empêche la méthode .show() de fonctionner
$(document).ready(function() {
    //Au clic sur le bouton,
    $('button').click(function () { 
        //j'affiche mon texte.
        $('#text').show();
    })
});
*/

$(document).ready(function(){
    $('button').click(function () { 
        // $('#text').removeAttr('hidden');
        $('#text').attr("hidden", false);
    });
});