// Caso3/Case3: Reads an XML file via AJAX request and puts its contents on the main page, when button is pressed.


function loadXMLDoc(){

  var xmlhttp;

  if (window.XMLHttpRequest){
    xmlhttp = new XMLHttpRequest();
    }

  else{
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById("indicaciones").innerHTML = xmlhttp.responseText;
    }
  }

  xmlhttp.open("GET", "ejemploXML.xml", true);
  xmlhttp.send();
}

function armButton(){
  document.getElementById("submitButton").addEventListener("click", loadXMLDoc);
}

window.onload = armButton;