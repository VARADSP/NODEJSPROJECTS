var http = require('http');

http.createServer(onRequest).listen(8888);

function onRequest(request,response) {
    console.log("A user made a request" + request.url);

    response.writeHead(200,{"Context-Type":"text/plain"});
    response.write("Here is some data For The User");
    response.end();


}

console.log("Server is now running");

