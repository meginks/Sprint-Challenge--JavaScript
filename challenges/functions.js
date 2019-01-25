// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function HigherOrderFunction (a, b, cb) {
return cb(a, b);
}

function add (x, y) {
  return x + y;
} 

console.log(HigherOrderFunction(3,5, add));


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function consume(a, b, cb) {
 return cb(a, b);
};

// for add function, see under step 1 

function multiply (x, y) {
  return x*y;
} 

function greeting (first, last) {
  return `Hello ${first} ${last}, nice to meet you!`;
} 

console.log(consume("John", "Doe", greeting));
console.log(consume(1,2, add));
console.log(consume(2,5, multiply));
 

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!

console.log(consume(2,2,add));
console.log(consume(10,16,multiply));
console.log(consume("Mary", "Poppins", greeting));

// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: The short answer is "closure". nestedFunction() can access the variable "internal" because "internal" is in the larger scope that nestedFunction() is inside of. It would not be possible to access the variable "internal" from outside of myFunction() because of scope.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();