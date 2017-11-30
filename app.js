//Basics

var person = {
    firstName:"roberts",
    lastName: "VSP",
    age:244
};
console.log(person);


function add(a,b) {
    return a+b;


}

function worthless() {



}
console.log(worthless());


console.log(add(2,3));


var printVsp = function () {
    console.log('VSP is not healthy dont fu** with him');

};
printVsp();

setTimeout(printVsp,5000);//function used inside other function

