const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 8000;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm',
  '.yml': 'text/yaml',
  '.yaml': 'text/yaml',
  '.md': 'text/markdown'
};

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.url}`);
  
  // Parse URL to remove query parameters
  const urlObj = new URL(req.url, `http://${req.headers.host}`);
  let filePath = '.' + urlObj.pathname;
  
  // Handle root path
  if (filePath === './') {
    filePath = './index.html';
  }
  
  // Handle directory paths (like /admin/) by looking for index.html
  if (filePath.endsWith('/')) {
    filePath = filePath + 'index.html';
  }
  
  // Resolve the file path
  filePath = path.resolve(filePath);
  
  // Security check to prevent directory traversal
  if (!filePath.startsWith(path.resolve('.'))) {
    res.writeHead(403, { 'Content-Type': 'text/html' });
    res.end('<h1>403 Forbidden</h1>', 'utf-8');
    return;
  }
  
  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.stat(filePath, (statErr, stats) => {
    if (statErr) {
      if (statErr.code === 'ENOENT') {
        // File not found
        fs.readFile('./404.html', (err, content404) => {
          if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 Not Found</h1><p>The page you are looking for could not be found.</p>', 'utf-8');
          } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(content404, 'utf-8');
          }
        });
      } else {
        // Server error
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end(`<h1>500 Internal Server Error</h1><p>${statErr.code}</p>`, 'utf-8');
      }
      return;
    }

    // If it's a directory, try to serve index.html from that directory
    if (stats.isDirectory()) {
      const indexPath = path.join(filePath, 'index.html');
      fs.readFile(indexPath, (error, content) => {
        if (error) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>404 Not Found</h1><p>Directory index not found.</p>', 'utf-8');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content, 'utf-8');
        }
      });
      return;
    }

    // It's a file, read and serve it
    fs.readFile(filePath, (error, content) => {
      if (error) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end(`<h1>500 Internal Server Error</h1><p>${error.code}</p>`, 'utf-8');
      } else {
        // Success
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  });
});

server.listen(port, hostname, () => {
  console.log(`Preview server running at http://${hostname}:${port}/`);
  console.log('Press Ctrl+C to stop the server');
});