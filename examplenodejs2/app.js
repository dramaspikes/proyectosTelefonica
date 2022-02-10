// Sets up a sample server to handle get and post requests with specific repsonses.

var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());

app.set("port", process.env.PORT || 3000);

http.createServer(app).listen(app.get("port"), function(){
    console.log("Express server listening at port" + app.get("port"));
});

app.get("/", (request, response) => {
    response.send("¡Hola, Express!");
})

app.get("/users/:userName", (request, response) => {
    var name = request.params.userName;
    response.send("¡Hola " + name + "!");
})

app.post("/users", (request, response) =>{
    var username = request.body.username;
    response.send("¡Hola " + username + "!");
});

app.get(/\/personal\/(\d*)\/?(edit)?/, (request, response) =>{
    var message ="Employee Profile #" + request.params[0];
    if (request.params[1] === "edit"){
        message = "Editing " + message;
    } else{
        message = "Viewing " + message;
    }
    response.send(message);
});