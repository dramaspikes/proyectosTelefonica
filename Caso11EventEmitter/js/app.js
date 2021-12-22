const Station = require("./radio");
const station = new Station();

station.on("opened", (arg)=>{
    console.log("opened", arg);
});

station.on("closed", (arg)=>{
    console.log("closed", arg);
});

station.on("newListener", (arg)=>{
    console.log("new listener", arg);
});

station.opened();

setTimeout(()=>{
    return station.closed();
}, 5000);


if(123 > 22){
    station.newListener();
}

