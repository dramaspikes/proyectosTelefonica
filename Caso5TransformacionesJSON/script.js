// Caso5/Case5: Uses stringify and parse to carry out their respective actions on a JSON object and JavaScript object, showing results in the console.

console.log("Howdy, partner!")

function loadObject(){

    var xmlhttp;

    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }

    else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            console.log(JSON.parse(xmlhttp.responseText));
            console.log(JSON.stringify(JSON.parse(xmlhttp.responseText)));
        }   
    }


    xmlhttp.open("GET", "vacaciones.json", true);

    xmlhttp.send();

}

window.onload = loadObject;


