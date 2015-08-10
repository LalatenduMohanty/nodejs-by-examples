var http = require("http");

http.createServer(function (request, response) {

	//Send the HTTP header
	//HTTP status: 200 : ok
	//Content Type: text/plain
	response.writeHead(200, {'content-Type': 'text/plain'});

	//send the response body as "hello world"
	response.end('Hello World\n');
}).listen(8081);

//Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
