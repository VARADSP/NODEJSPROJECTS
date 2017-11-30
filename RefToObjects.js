//Understanding references to objects
// Difference between == amd ===
// == - compares values
//=== - compares the values as well as types


var vsp = {
    favFood:"VSP",
        favMovies:"Chappie"
};

var person = vsp;

person.favFoog = "salad";

console.log(vsp.favFoog);
