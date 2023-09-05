"use strict"

const filepath = process.argv[2]
const filesystem = require("fs")

filesystem.readFile(filepath, 'utf8', function(err, fileContent){
    console.log((fileContent.match(/\n/g) || []).length);
});