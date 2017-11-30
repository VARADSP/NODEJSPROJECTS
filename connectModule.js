var connect = require('connect');
var http = require('http');

var app = connect();

function doFirst(request,response,next) {
    console.log("Beacon");
    next();
}
function doSecond(request,response,next) {
    console.log("Tuna");
    next();
}

app.use(doFirst);
app.use(doSecond);

function profile(request,responde,next) {
    console.log("User requested profile");



}


function forum(request,responde,next) {
    console.log("User requested forum");



}

app.use('/profile',profile);
app.use('/forum',forum);
http.createServer(app).listen(8888);

console.log("Server is running");


