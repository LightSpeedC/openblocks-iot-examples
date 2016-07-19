http = require('http')
http.createServer((req, res) => {
	res.writeHead(200, {'content-type': 'text/plain'});
	res.end('hello world 2016-07-19 15:38 JST\n');
}).listen(process.env.PORT || 3000);
