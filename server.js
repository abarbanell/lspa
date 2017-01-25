// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
// const bodyParser = require('body-parser');


const app = express();

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// set up a config routes
app.get('/config', function(req, res) {
  res.json({
    "THREESCALE_PROVIDER_KEY": process.env.THREESCALE_PROVIDER_KEY,
    "LG_BASE_URL": process.env.LG_BASE_URL
  })
})

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`LSPA running on localhost:${port}`));