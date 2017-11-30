var movies = require('./movies');

movies.favMvoies = "The Notebook";

console.log("Emily's favourite movie is : " + movies.favMvoies);

var movies1 = require('./moviesReturnNewObject');

var emilyMovies = movies1();

emilyMovies.favMvoies = "The Notebook";

console.log("Emily's Favourite Movie is " + emilyMovies.favMvoies);


