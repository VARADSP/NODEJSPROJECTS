var vsp = {
    printFirstName : function () {
        console.log("My Name is VSP");
        console.log(this === vsp);


    }
};

vsp.printFirstName();


//The default calling context is global
function doSomethingWorthless() {

    console.log("\nI am Worthless");
    console.log(this === global);
    console.log(this === vsp);

}
doSomethingWorthless();
