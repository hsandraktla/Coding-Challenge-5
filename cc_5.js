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


//Task 5: Product Availability - Filter Method
//Declare an array inventory with at least five product quantities.
let inventory = [2, 0, 5, 3, 7];
//Use the .filter() method to remove products with zero stock.
let availableProducts = inventory.filter(quantity => quantity > 0);
//Log the filtered array to the console.
console.log(availableProducts);


//Task 6: Revenue Calculation - Reduce Method
//Declare an array sales.
let sales = [500, 300, 200, 400];
//Use the .reduce() method to calculate total revenue.
let totalRevenue = sales.reduce((total, sale) => total + sale, 0);
//Log the total revenue to the console.
console.log("Total Revenue: ", totalRevenue);


//Task 7: Customer Search - find() Method
//Declare an array customers.
let customers = ["Alice", "Bob", "Charlie", "David"];
//Use the .find() method to locate the customer "Charlie".
let customerSearch = customers.find(customer => customer === "Charlie");
//Log the result to the consol.
console.log(customerSearch);


//Task 8: Tax Calculation - Function Declaration
//Write a function calculateTax(amount, taxRate).
let amount = 1000;
let taxRate = 0.15;
function calculateTax(amount, taxRate) {
    return amount * taxRate;
};
//Return the calculated tax and log it using a template literal.
console.log(`The calculated tax amount is $${calculateTax(amount, taxRate)}`);


//Task 9: Discount Application - Function Expression
//Declare a function expression applyDiscount(price, discount).
let price = 35;
let discount = 3.5;
const applyDiscount = function(price, discount) {
    return price - discount;
};
//Return the discounted price and log the result.
console.log("Discounted Price: ", applyDiscount(price, discount));


