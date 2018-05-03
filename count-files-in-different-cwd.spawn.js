'use strict';
const { spawn, } = require('child_process');

const child = spawn('find . -type f | wc -l', {
  stdio: 'inherit',
  shell: true,
  cwd: '../../Downloads',
});