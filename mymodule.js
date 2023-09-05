const fs = require("fs");

module.exports = function(directoryPath, extensionFilter, callback) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return callback(err, null);
    } else {
      const filteredFiles = files.filter(file =>
        file.endsWith("." + extensionFilter)
      );
      return callback(null, filteredFiles);
    }
  });
};
