// Caso12/Case12: Uses Node.JS to create a local file, count the lines present in the file, 
// copy its contents into a new file, and delete the original file. 

fs = require("fs");

const content = "Hola caracola \nHola caracola \nHola caracola \nHola caracola";
var newContent = "";

// Writes the input.txt file with above content.
fs.writeFile("./input.txt", content, err => {
    if (err){
        console.error(err);
        return
    }
})

// Counts the number of lines in input.txt, transfers content from input.txt to output.txt and deletes input.txt
fs.readFile("./input.txt", "utf8" , (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    newContent = data;

    console.log("File has " + newContent.split("\n").length + " lines.");

    fs.writeFile("./output.txt", newContent, err => {
        if (err){
            console.error(err);
            return
        }
    })

    fs.unlink("./input.txt", (err) => {
        if (err) {
            console.error(err)
            return
        }
    })
})



