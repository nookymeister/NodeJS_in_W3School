var http = require('http');
var fs = require('fs');

http.createServer(function (req, res){
	fs.readFile('demofile1.html', function(err, data){
		res.writeHead(200, {'Content-Type': 'tedt/html'});
		res.write(data);                                                                                                                                                                                                                                      
		res.end();
	});
}).listen(8080, () => {
	console.log('App Started');
});