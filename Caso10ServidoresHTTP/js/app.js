// Caso10/Case10: Creates a Node.JS server and client which, when any file name is concatinated with the domain name, is able to retreive and serve that file. 

var http = require('http')
var fs = require('fs')
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000 );

http.createServer(app).listen(app.get('port'), () => {
    console.log("Express server listening at port" + app.get("port"));
});

app.get("/:fileName", (request, response) => {
    var file = request.params.fileName;
    response.sendFile(file + ".html", {root:"../public"});
})

app.post("/files", (request, response) => {
    var file = request.body.fileName;
    console.log(file + ".html");
})

// response.writeHead(200, { 'content-type': 'text/html' });
    // fs.createReadStream('../' + file + '.html').pipe(response);
