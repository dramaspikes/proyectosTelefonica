//Carga de los módulos requeridos para el programa
var http = require("http");

var fs = require("fs");

var url = require("url");
//Creación del servidor
http.createServer(function (request, response) {

    // Cogemos el path que nos ha entrado por la request

    var pathname = url.parse(request.url).pathname;
    // Leemos el fichero requerido para que sea enviado
    fs.readFile(pathname.substr(1), function (err, data) {

        if (err) {
            console.log(err);
            // Página no encontrada
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, {"Content-Type": "text/html"});

        }else{
            // Página encontrada
            // HTTP Status: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, {"Content-Type": "text/html"});
            // Damos la respuesta a nuestra petición
            response.write(data.toString());

        }
        // Enviamos la respuesta
        response.end();
    });
}).listen(8081);