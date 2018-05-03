'use strict';
const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');

const files = fs.readdirSync(dirname);

files.forEach(file => {
  const filePath = path.join(dirname, file);
  fs.stat(filePath, (error, stats) => {
    if (error !== null) {
      throw error;
    }
    fs.truncate(filePath, Math.ceil(stats.size / 2), error => {
      if (error !== null) {
        throw error;
      }
    });
  });
});
