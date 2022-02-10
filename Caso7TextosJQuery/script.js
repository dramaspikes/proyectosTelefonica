// Caso7/Case7: Uses JQuery to highlight \<p> elements of more than 100 characters.


$(document).ready(function(){

    var p = $("p");
    
    p.each(highlight);

    function highlight(){
        // var text = $(this).html();
        // var length = text.length;
        var length = $(this).html().length;
        if(length >= 100){
        $(this).css("background-color", "yellow");
        }
    }
    
})



