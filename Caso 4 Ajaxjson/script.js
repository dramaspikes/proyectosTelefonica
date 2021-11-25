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