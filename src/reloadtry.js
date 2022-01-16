const express = require('express');
const path = require('path');

const livereload = require('livereload');
const connectLivereload = require('connect-livereload');
const publicDirectoryPath = path.join(__dirname, '../public');

// open livereload high port and start to watch public directory for changes
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(publicDirectoryPath);

// ping browser on Express boot, once browser has reconnected and handshaken
liveReloadServer.server.once('connection', () => {
    setTimeout(() => {
        liveReloadServer.refresh('/');
    }, 100);
});

const app = express();
app.use(connectLivereload());
