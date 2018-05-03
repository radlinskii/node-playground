'use strict';
const { exec, } = require('child_process');

exec('find . -type f | wc -l', (error, stdout, stderr) => {
  if (error !== null) {
    console.error(`exec error: ${stderr}`);
  }
  console.log(`number of files ${stdout}`);
});