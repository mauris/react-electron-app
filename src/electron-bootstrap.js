/*
  Performs development electron bootstrapping
  waits for React server to become available before
  launching the electron instance.
 */

/* eslint-disable no-console */

const net = require('net');
const { exec } = require('child_process');

const { PORT } = process.env;
const port = PORT ? (PORT - 100) : 3000;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new net.Socket();

let isElectronStarted = false;
const tryConnection = () => {
  client.connect(
    { port },
    () => {
      console.log('React server connected!');
      client.end();
      if (!isElectronStarted) {
        console.log('Starting Electron');
        isElectronStarted = true;
        exec('npm run start-electron');
      }
    },
  );
};

tryConnection();

client.on('error', () => {
  setTimeout(tryConnection, 1000);
});
