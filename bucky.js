var movies = require('./movies');


//movies.favMvoies = "The Notebook";

console.log("Bucky's favourite movie is : "+ movies.favMvoies);
var movies1 = require('./moviesReturnNewObject');

var buckyMovies = movies1();
console.log("Bucky's Favourite Movie is " + buckyMovies.favMovies);
