//callback function

function placeOrder(orderNumber) {
    console.log("Customer Order :", orderNumber);

    cookAndDeliverFood(function () {
        console.log("Delivered Food Order",orderNumber);

    });

}

//simulate a 5s operation
function cookAndDeliverFood(callback) {
    setTimeout(callback,5000);

}

//simulate users web requests
placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(55);
placeOrder(12);
placeOrder(11);
placeOrder(1111);
placeOrder(11111111);
