"use strict"

const filepath = process.argv[2]
const filesystem = require("fs")

const fileContent = filesystem.readFileSync(filepath,{ encoding: 'utf8', flag: 'r' });

console.log((fileContent.match(/\n/g) || []).length)