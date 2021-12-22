const EventEmitter = require("events");

var station = {
    freq: "90.16",
    name: "Mi Radio variada"
    };

class Station extends EventEmitter {
    opened() {
        this.emit("opened", station);
    }

    closed() {
        this.emit("closed", station);
    }

    newListener(){
        this.emit("newListener", station);
    }
}

module.exports = Station;
