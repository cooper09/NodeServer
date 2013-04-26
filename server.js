var http = require("http");
var url = require('url');
var fs = require('fs');
var io = require('socket.io');
 
var server = http.createServer(function(request, response){ 
    console.log('Connection');
    var path = url.parse(request.url).pathname;
      console.log("pathname: " + path );
    switch(path){
        case '/':
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write('One Step Beyond!!');
            break;
        case '/favicon.ico':
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write('WTF is this favicon thingy');
            break;
        case '/socket.html':
            fs.readFile(__dirname + path, function(error, data){
                if (error){
                    response.writeHead(404);
                    response.write("opps this doesn't exist - 404");
                }
                else{
                    response.writeHead(200, {"Content-Type": "text/html"});
                    response.write(data, "utf8");
                }
            });
            break;
        default:
            response.writeHead(404);
            response.write("opps this doesn't exist - 404");
            break;
    }
    response.end(); 
}); 
 
server.listen(8001); 
console.log('Server Running...');