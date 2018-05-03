'use strict';
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const cpus = os.cpus().length;

  console.log(`Forking for ${cpus} CPUs`);
  for (let i = 0; i < cpus; i++) {
    cluster.fork();
  }

  console.log(`master PID: ${process.pid}`);

  cluster.on('exit', (worker, code, signal) => {
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      console.log(`Worker ${worker.id} crashed
      ... Starting a new Worker...`);
      cluster.fork();
    }
  });

  process.on('SIGUSR2', () => {
    const workers = Object.values(cluster.workers);

    const restartWorker = workerIndex => {
      const worker = workers[workerIndex];
      if (!worker) {
        return;
      }
      worker.on('exit', () => {
        if (!worker.exitedAfterDisconnect) {
          return;
        }
        console.log(`Exited process ${worker.process.pid}`);
        cluster.fork().on('listening', () => {
          restartWorker(workerIndex + 1);
        });
      });

      worker.disconnect();
    };

    restartWorker(0);
  });

} else {
  require('./single-process-based-server');
}