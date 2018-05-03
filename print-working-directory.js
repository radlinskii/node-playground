'use strict';
const { spawn, } = require('child_process');

const child = spawn('pwd');

child.stdout.on('data', data => {
  console.log(`child stdout: \n${data}`);
});


child.stderr.on('data', data => {
  console.error(`child stderr: \n${data}`);
});

child.on('exit', (code, signal) => {
  console.log(`child process exited with code ${code}, signal ${signal}`);
});