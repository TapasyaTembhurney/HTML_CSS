
let age = 18;
console.log("Age :",age == 18);

let userName = "Tapasya";
let entered_userName = "TAPASYA";

// console.log("Username :", userName === entered_userName);

console.log("Username :", userName.toLowerCase() === entered_userName.toLowerCase()); 

let hasPassport = true;
console.log("Passport :",hasPassport == true);

// Here string is automatically and internally converted into number as javascript always convert the string into number.
console.log(5 == '5');

// Also when there is a conversion of datatype of value without manually writing code then it is known as Implicit Conversion or Implicit Type Casting . It is also called as Type Coercion . Above is the Example.

console.log(5 === '5') //strict equality operator 

// Javascript always convert boolean into number

console.log("Boolean converison into number:",true == 1);
console.log("Type checking :",true === 1);

console.log("Type conversion :",true == '1');
// console.log(Number(true) == Number('1'));
// The above commented line of code is showing how internally in memory the values are stored and converted into another type.

// Null and Undefined

console.log(null == undefined);
console.log(null === undefined);

// Empty string and zero

console.log('' == 0);
console.log('' === 0);

// Null and false
console.log(null == false);

// Undefined and zero

console.log(undefined == 0);

// NaN comparisons

console.log("NaN comparisons :",NaN == NaN);
console.log("NaN comparisons :",NaN === NaN);

// String and Boolean

console.log('true' == true);
console.log('false' == false);

// String numbers and Numbers

console.log('001' == 1);
console.log('010' == 10);

// NUMBER AND NULL

console.log(0 == null);
console.log(0 == undefined);