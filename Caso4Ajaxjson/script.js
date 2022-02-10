// Caso4/Case4: Reads a JSON file via AJAX request and puts its contents on the main page, when button is pressed.

function sendRequest(){
    var xmlRequest;

    if(window.XMLHttpRequest){
        xmlRequest = new XMLHttpRequest();
    }

    else{
        xmlRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlRequest.onreadystatechange = function(){
        if(xmlRequest.readyState == 4 && xmlRequest.status == 200){
            // const newText = JSON.parse(xmlRequest.responseText);  these two lines will first make it an object, then a string again. This way you can get specific properties.
            // document.getElementById("indicaciones").innerHTML = JSON.stringify(newText);
            document.getElementById("indicaciones").innerHTML = xmlRequest.responseText;
            const newText = JSON.parse(xmlRequest.responseText);
            document.getElementById("indicaciones").innerHTML = newText.name + " lives in " + newText.country + ".";
        }
    }


    xmlRequest.open("GET", "ejemploJSON.json", true);

    xmlRequest.send();
}

function armButton(){
    document.getElementById("submitButton").addEventListener("click", sendRequest);
}

window.onload = armButton;