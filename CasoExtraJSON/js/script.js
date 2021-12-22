var xhr;

window.onload = ajaxCall;

function ajaxCall(){
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargarObras;
    var url = "js/obras.json"
    xhr.open("GET", url);
    xhr.send();
}

function cargarObras(){
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            var obras = JSON.parse(xhr.responseText);
            var resultado = "<option value='' selected disabled hidden>Elixe unha obra</option>";
            for(var i in obras){
                resultado += "<option value='" + obras[i].nome + "'>" + obras[i].nome + "</option>";
            }
            document.getElementById("obras").innerHTML = resultado;
        }else{
            resultado = "Non se puido cargar JSON, sentímolo";
        }
        
    }

}

