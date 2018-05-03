'use strict';
const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'files');

const ms1Day = 24 * 60 * 60 * 1000;

for (let i = 0; i < 10; i++) {
  const filePath = path.join(dirname, `file${i}`);
  let content = 'a';
  for (let j = 0; j < 100 * i - 1; j++) {
    content += 'a';
  }
  fs.writeFile(filePath, content, error => {
    if (error !== null) {
      throw error;
    }
    const time = (Date.now() - i * ms1Day) / 1000;
    fs.utimesSync(filePath, time, time);
  });
}