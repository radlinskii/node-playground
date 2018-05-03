'use strict';
const http = require('http');
const pid = process.pid;

http.createServer((req, res) => {
  for (let i = 0; i < 1e9; i++);
  res.end(`Handled by process ${pid}`);
}).listen(8080, () => {
  console.log(`started process ${pid}`);
});

/* Random Server Crash Example
setTimeout(() => {
  process.exit(1);
}, Math.random() * 10000);
*/