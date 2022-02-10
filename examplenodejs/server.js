//Loads in the modules required for the application
var http = require("http");

var fs = require("fs");

var url = require("url");
//Creation of server
http.createServer(function (request, response) {

    // Getting the path we received via request

    var pathname = url.parse(request.url).pathname;
    // Reading the document required so it can be sent
    fs.readFile(pathname.substr(1), function (err, data) {

        if (err) {
            console.log(err);
            // Page not found
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, {"Content-Type": "text/html"});

        }else{
            // Page found
            // HTTP Status: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, {"Content-Type": "text/html"});
            // Damos la respuesta a nuestra petición
            response.write(data.toString());

        }
        // Sending the reply
        response.end();
    });
}).listen(8081);