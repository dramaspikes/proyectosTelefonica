// Caso6/Case6: Uses JQuery to make text in fields change color on focus.


$(document).ready(function(){
    
    var q = $("h1");
    var s = $("input");


    function goRed(){
        $(this).css("color", "red");
    }

    function goBlack(){
        $(this).css("color", "black");
    }

    // These two functions weren't in the original assignment, but I wanted to try them. They change the color of h1 on hover and the size on click.
    function goGreen(){
        $(this).css("color", "green");
    }
    
    function changeSize(){
        var c = $(this).css("font-size");
        console.log(c);
        if(c=="400px"){
            $(this).css("font-size", "2rem");
        }
        else{
            $(this).css("font-size", "25rem");
        }

    }
    
    s.focus(goRed);
    s.blur(goBlack);
    q.hover(goGreen, goBlack);
   
    q.click(changeSize);



    // This was test code, which I want to leave here to see the evolution of my thinking.
    // q.mouseenter(goGreen);
    // q.mouseleave(goBlack);
    // var y = $("input");


    // let changeColor = () => $(this).css("color", "red");

    // y.focus(changeColor());

    // y.focus(changeColor);
    // let goAway = () => $(this).hide;

    // var z = $("header");
    // z.mouseenter(goAway());
    // z.hover(changeColor());

    // var w = $("h1");
    // function changeColor(){
    //     $(h1).css("color", "red");
    // }
})