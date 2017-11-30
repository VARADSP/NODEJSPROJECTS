function User() {
    this.name = "";
    this.life = 100;
    this.givelife = function giveLife(targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + " Gave 1 life to " + targetPlayer.name);

    }

}


var Bucky = new User();
var vsp = new User();
Bucky.name = "Bucky";

vsp.name = "VSP";

vsp.givelife(Bucky);

console.log("Bucky " + Bucky.life);
console.log("VSP " + vsp.life);

// You can add functions to all objects
User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercutted " + targetPlayer.name);

};

Bucky.uppercut(vsp);
console.log("Bucky " + Bucky.life);
console.log("VSP " + vsp.life);


//You can add properties to all objects
User.prototype.magic = 60;
console.log(Bucky.magic);
console.log(vsp.magic);