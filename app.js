'use strict';

const http = require('http');

http.createServer((req, res) => {
	res.writeHead(200, {'content-type': 'text/html'});
	res.end('<p>hello world 2016-07-20 07:07 JST</p>');
}).listen(process.env.PORT || 3000);
