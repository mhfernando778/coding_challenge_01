// Task 1: Employee Details //
let employeeName = "Person Name";
const employeeID = 12345;
var isActive = true;

console.log(employeeName); // logs the employee name to console
console.log(typeof employeeName); // logs the type: string
console.log(employeeID); // logs the employee ID
console.log(typeof employeeID); // logs the type: number
console.log(isActive); //logs the active status
console.log(typeof isActive); // logs the type: boolean

// Task 2: Product Details //
let productName = "Game";
const productPrice = 50;
var isAvailable = true;

console.log(productName); // logs the the product name
console.log(typeof productName); //logs the type: string
console.log(productPrice); // logs the price of the product
console.log(typeof productPrice); // logs the type: number
console.log(isAvailable); // logs the availability status
console.log(typeof isAvailable); // logs the type: boolean

// Task 3: Financial Transactions //
let accountBalance = 1000; // the original transaction balance

accountBalance += 100;
console.log(accountBalance); // balance after adding 100

accountBalance -= 100;
console.log(accountBalance); // balance after subtracting 100

accountBalance /= 100;
console.log(accountBalance); // balance after dividing by 100

accountBalance *= 10;
console.log(accountBalance); // balance after multiplying by 10

// Task 4: Customer Messaging //
let customerName = "Felicia";
let welcomeMessage = "Welcome to our store, Ms.";

console.log(welcomeMessage + " " + customerName); // combined both strings to form a message

// Task 5: Access Control //
let isLoggedIn = true; // they are logged in
let isWorking = false; // they are not working

console.log(isLoggedIn && isWorking); // are they logged in AND working? false
console.log(isLoggedIn || isWorking); // are they logged in OR working? - true
console.log(!isLoggedIn); // they are not logged in - false