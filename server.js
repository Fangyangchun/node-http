// var http = require('http');
// var server = new http.Server();

// server.on('request', function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<h1>Node.js</h1>');
//     res.end('<p>HelloWorld</p>');
// });

// server.listen(3000);
// console.log('HTTP SERVER is LISTENING AT PORT 3000.');

var http = require('http');
var querystring = require('querystring');
var util = require('util');

// var iconv = require('iconv-lite'); 
// var BufferHelper = require('bufferhelper');

http.createServer(function(req, res) {
    const method = req.method;
    if (method === 'POST') {
        var post = '';
        req.on('data', function(chunk) {
            post += chunk;
        });
        req.on('end', function() {
            post = querystring.parse(post);
            res.end(util.inspect(post));
        })
    }
    if (method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<h1>Node.js</h1>');
        res.end('<p>HelloWorld</p>');
    }
    
}).listen(3000);
console.log('localhost:3000');