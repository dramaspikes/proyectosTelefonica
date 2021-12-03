$(document).ready(function(){
    
    var q = $("h1");
    var s = $("input");


    function goRed(){
        $(this).css("color", "red");
    }

    function goBlack(){
        $(this).css("color", "black");
    }

    // Estas dos funciones no entraban el el caso, pero quería probarlas. Cambian el color del h1 on hover y el tamaño con click.
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



    // Todo esto fue código de prueba, que quiero mantener aquí para ver la evolución de mis pensamientos.
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