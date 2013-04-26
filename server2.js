
var http = require("http");
var url = require('url');
var fs = require('fs');
var io = require('socket.io');
 
var server = http.createServer(function(request, response){ 
    console.log('Connection');
    var path = url.parse(request.url).pathname;
    console.log('Path: ' + path );

    switch(path){
        case '/':
            console.log("/: " + path );
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write('hello world');
            break;
        case '/favicon.ico':
            console.log("favicon: " + path );
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write('Favicon and the Decepticons!');
            break;
        case '/index.html':
            console.log("index " + path );
            response.writeHead(200, {'Content-Type': 'text/html'}); 
            response.write('Index page is all the rage!');
            break;
        case '/socket.html':
            console.log("socket: " + path );
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
 
server.listen(8002);
 
server.listen(8002);
 
io.listen(server);

console.log('Server 2 Running...');