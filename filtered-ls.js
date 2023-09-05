"use strict"

const directoryPath = process.argv[2]
const extensionFilter = String("." + process.argv[3])
const filesystem = require("fs")

filesystem.readdir(directoryPath, (err, files) => {
    if (err)
      console.log(err);
    else {
      files.forEach(file => {
        if (file.endsWith(extensionFilter)) console.log(file);
      })
    }
  })