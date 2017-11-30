var http = require('http');

var fs = require('fs');

//404 Response


function send404Responde(response) {
    response.writeHead(404,{"Context-Type":"text/plain"});

    response.write("Error 404: Page Not Found");
    response.end();



}

//handle a user request
function onRequest(request,response) {

    if(request.method == "GET" && request.url == "/"){

        response.writeHead(200,{"Context-Type":"text/html"});

        fs.createReadStream('./site/index.html').pipe(response);


    }
    else {
        send404Responde(response);

    }
}
http.createServer(onRequest).listen(8888);

console.log("Server is now running");

