var http = require('http');
http
 .createServer(function(req,res){
 	res.writeHead(200,{'Content-Type':'text/plain'})
 	res.write('hello node.js')
 	res.end()
 }).listen(4000,function(){
 	console.log('server on port 4000');
 });