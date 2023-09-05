"use strict";

const ls = require("./mymodule.js");

const directoryPath = process.argv[2]
const extensionFilter = process.argv[3]

ls(directoryPath, extensionFilter, (err, files) => {
  if (err) {
    console.error("Error:", err);
  } else {
    files.forEach(file => {
      console.log(file);
    });
  }
});
