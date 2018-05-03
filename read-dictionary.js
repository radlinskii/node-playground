'use strict';
const fs = require('fs');
const path = require('path');
const { spawn, } = require('child_process');

const dirname = path.join(__dirname, 'files');

const child1 = spawn('wc -l', { shell: true, });
const child2 = spawn('grep -c pipe', { shell: true, });

const readStream = fs.createReadStream(path.join(dirname, 'dictionary.txt'));
readStream.pipe(child1.stdin);
readStream.pipe(child2.stdin);

child1.stdout.on('data', data => {
  process.stdout.write(data.toString());
});

child2.stdout.on('data', data => {
  process.stdout.write(data.toString());
});

process.stdout.on('data', data => {
  console.log(data.toString());
});


