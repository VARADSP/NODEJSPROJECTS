var fs = require('fs');//File System Module

var path = require('path');//File Paths


var websiteHome = "Desktop/VSP//TheNewBoston/index.html";

var websiteAbout = "Desktop/VSP/TheNewBoston/about.html";


console.log("Normalize " + path.normalize(websiteHome));

console.log("Directory Name "+path.dirname(websiteAbout));


console.log("Base Name " + path.basename(websiteHome));

console.log("Extension Name " + path.extname(websiteHome) +"\n " );

console.log(__dirname);
console.log(__filename);

setInterval(function () {
    console.log("Beef");
},2000);


//fs.writeFileSync("corn.txt","Corn is good, Corn is Life");

console.log(fs.readFileSync("corn.txt").toString());
