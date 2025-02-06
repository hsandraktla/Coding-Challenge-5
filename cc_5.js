//Task 1: Customer Profile - Object Properties
//Declare an object customer with the properties.
let customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
};
//Log each property using console.log() and a template literal.
console.log(`Customer Name: ${customer.name}`);
console.log(`Customer Age: ${customer.age}`);
console.log(`Customer Email: ${customer.email}`);


//Task 2: Order Details - Object Methods
//Declare an object order with properties.
let order = {
    orderID: 12345,
    totalAmount: 150,
    status: "Processing",
//Add a method displayOrder() inside the object to log the order details using this.
    displayOrder() {
        console.log("Order ID: ", this.orderID);
        console.log("Total Amount: ", this.totalAmount);
        console.log("Status: ", this.status)
    }
};
//Call the method and log the details.
order.displayOrder();


//Task 3: Shopping Cart - Array Manipulation
//Declare an array cartItems with three product names.
let cartItems = ["Shampoo", "Conditioner", "Body Wash"];
//Add a new product to the cart using .push().
cartItems.push("Sponge");
//Remove the last item using .pop().
cartItems.pop();
//Add an item at the beginning using .unshift().
cartItems.unshift("Body Scrub");
//Remove the first item using .shift().
cartItems.shift();
//Log the final array to the console.
console.log("Updated Shopping Cart: ", cartItems);


//Task 4: Price Adjustments - Map Method
//Declare an array prices.
let prices = [100, 200, 300];
//Use the .map() method to apply a 10% discount to each price.
let discountRate = 0.1;
let discountedPrices = prices.map(price => price * (1 - discountRate));
//Log the new discounted prices to the console.
console.log("Discounted Prices: ", discountedPrices);


