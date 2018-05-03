'use strict';
const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');

const files = fs.readdirSync(dirname);
const ms1Day = 24 * 60 * 60 * 1000;

files.forEach(file => {
  const filePath = path.join(dirname, file);
  fs.stat(filePath, (error, stats) => {
    if (error !== null) {
      throw error;
    }
    if ((Date.now() - stats.mtime.getTime()) > 7 * ms1Day) {
      fs.unlink(filePath, error => {
        if (error !== null) {
          throw error;
        }
      });
    }
  });
});