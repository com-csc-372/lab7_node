const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 1337;

function serveStaticFile(res, filePath, contentType, responseCode = 200) {
    const file = path.join(__dirname, filePath);

    fs.readFile(file, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(responseCode, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}

const server = http.createServer((req, res) => {
    let url = req.url.toLowerCase().split('?')[0];
    url = url.endsWith('/') ? url.slice(0, -1) : url;

    switch (url) {
        case '/index':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;
        case '/posts':
            serveStaticFile(res, '/public/posts.html', 'text/html');
            break;
        case '/contact':
            serveStaticFile(res, '/public/contact.html', 'text/html');
            break;
        case '/css/style.css':
            serveStaticFile(res, '/public/css/style.css', 'text/css');
            break;
        case '/images/logo.png':
            serveStaticFile(res, '/public/images/logo.png', 'image/png');
            break;
        case '/images/404bottom.gif':
            serveStaticFile(res, '/public/images/404bottom.gif', 'image/gif');
            break;
        case '/images/404mid.gif':
            serveStaticFile(res, '/public/images/404mid.gif', 'image/gif');
            break;
        case '/images/404top_w.jpg':
            serveStaticFile(res, '/public/images/404top_w.jpg', 'image/jpg');
            break;
        case '/images/blogging.png':
            serveStaticFile(res, '/public/images/blogging.png', 'image/png');
            break;        
        case '/images/computer-typing.jpeg':
            serveStaticFile(res, '/public/images/computer-typing.jpeg', 'image/jpeg');
            break;
        case '/images/construction.png':
            serveStaticFile(res, '/public/images/construction.png', 'image/png');
            break;
        case '/images/merch.png':
            serveStaticFile(res, '/public/images/merch.png', 'image/png');
            break;
        case '/images/x.png':
            serveStaticFile(res, '/public/images/x.png', 'image/png');

            break;
        default:
            serveStaticFile(res, '/public/404.html', 'text/html', 404);
            break;
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
