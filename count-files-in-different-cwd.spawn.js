'use strict';
const { spawn, } = require('child_process');

const child = spawn('find . -type f | wc -l', { // eslint-disable-line 
  stdio: 'inherit',
  shell: true,
  cwd: '../../Downloads',
});