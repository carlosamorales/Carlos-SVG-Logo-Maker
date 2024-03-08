// lib/fileWriter.js

const fs = require('fs');

function writeSVGToFile(svgString) {
  return new Promise((resolve, reject) => {
    fs.writeFile('logo.svg', svgString, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

module.exports = { writeSVGToFile };
