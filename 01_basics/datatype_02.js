//there two type of data types in js

//1. primitive data types (immutable) - string, number, boolean, null, undefined, symbol, bigint
//2. non-primitive or reference data types (mutable) - object, array, function, date, regex, map, set, weakmap, weakset

//typeof operator is used to check the type of data type in js
//it returns the type of data type as a string


//----primitive data types-----

//string-----
//string is a primitive data type in JavaScript that represents a sequence of characters. It can be created using single quotes, double quotes, or backticks (template literals). Template literals allow for string interpolation and multi-line strings.
let nam = 'sarat' ;
let gretting = "hello";
let message =`welcome ${nam}`;//template literal (es6 feature) 

console.log(message);
console.log(typeof message); //string


//boolean-----
//boolean is a primitive data type in JavaScript that can have two values: true or false. It is often used for conditional statements and logical operations.
let isActive = true; //true or false

console.log(isActive);
console.log(typeof isActive); //boolean



//number-----
//number is a primitive data type in JavaScript that represents both integer and floating-point numbers. It is a double-precision 64-bit binary format IEEE 754 value. JavaScript does not have separate types for integers and floats; both are represented as numbers.
let age = 30; //integer 
let pi = 3.14; //float
console.log(typeof age); //number


//bigint-----
//BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1 (Number.MAX_SAFE_INTEGER).
let bigInt = 1234567890123456789012345678901234567890n; //bigint
console.log(typeof bigInt); //bigint
//BigInt is a primitive data type in JavaScript that can represent integers with arbitrary precision. It is created by appending "n" to the end of an integer literal or by using the BigInt() constructor.


//undefined----
let x; //undefined
console.log(typeof x); //undefined
//undefined is a primitive data type in JavaScript that represents the absence of a value or an uninitialized variable. It is the default value of variables that have been declared but not assigned a value.


//null-----
//null is a primitive data type in JavaScript that represents the intentional absence of any object value. It is often used to indicate that a variable should not point to any object or value.
let y = null; //null
console.log(typeof y); //object (this is a bug in js, null is not an object but typeof null returns object)


//symbol---
//symbol is a primitive data type in JavaScript that represents a unique and immutable value. It is often used as a key for object properties to avoid name clashes. Symbols are created using the Symbol() function.   
let sym = Symbol('description'); //symbol
console.log(typeof sym); //symbol   



//----non-primitive data types-----

//object-----
//object is a non-primitive data type in JavaScript that represents a collection of key-value pairs. It can store multiple values of different types. Objects are created using curly braces {} or the Object() constructor.    
let person = { name: 'John', age: 30 }; //object
console.log(typeof person); //object


//array-----
//array is a special type of object in JavaScript that represents an ordered collection of values. Arrays can store multiple values of different types and are created using square brackets [].
let arr = [1, 2, 3, 4, 5]; //array          
console.log(typeof arr); //object (arrays are a type of object in JavaScript, so typeof returns object)

//function-----
//function is a special type of object in JavaScript that represents a block of code that can be called and executed. Functions can take parameters and return values. They are created using the function keyword or arrow function syntax.
let add = function(a, b) { return a + b; }; //function
console.log(typeof add); //function (functions are a type of object in JavaScript, but typeof returns function) 


//date-----
//date is a built-in object in JavaScript that represents a specific point in time. It can be created using the Date() constructor or by calling new Date().
let date = new Date(); //date       
console.log(date); //current date and time
console.log(typeof date); //object (date is a type of object in JavaScript, so typeof returns object)

//regex-----
//regex is a built-in object in JavaScript that represents a regular expression, which is a pattern used to match character combinations in strings. It can be created using the RegExp() constructor or by using forward slashes.
let regex = /ab+c/; //regex //regular expression that matches "ab" followed by one or more "c"
console.log(typeof regex); //object (regex is a type of object in JavaScript, so typeof returns object)

//etc






//type conversion in js

//type conversion is the process of converting one data type to another. In JavaScript, type conversion can be done implicitly (automatic) or explicitly (manual).

//implicit type conversion (automatic) - when js automatically converts one data type to another
//explicit type conversion (manual) - when we manually convert one data type to another using built-in functions or methods

//example of implicit type conversion
let a = 10; //number
let b = '20'; //string
let c = a + b; //implicit type conversion (number to string)    
console.log(c); //1020 (string)
console.log(typeof c); //string


//example of explicit type conversion
let d = 10; //number
let e = '20'; //string
let f = d + Number(e); //explicit type conversion (string to number)
console.log(f); //30 (number)
console.log(typeof f); //number

//type coercion is the process of converting one data type to another. In JavaScript, type coercion can be done implicitly (automatic) or explicitly (manual).

//+ is used for both addition and string concatenation. If one of the operands is a string, JavaScript will convert the other operand to a string and perform string concatenation. This is known as type coercion.
let g =10 +'20'; //string concatenation (number to string)
console.log(g); //1020 (string)
console.log(typeof g); //string

//if operands is not srring then it will perform operation according to the operator
let h = 10 - '20'; //number subtraction (string to number)
console.log(h); //-10 (number)





//parseInt() and parseFloat() are built-in functions in JavaScript that are used to convert strings to numbers. parseInt() converts a string to an integer, while parseFloat() converts a string to a floating-point number.



//parseInt() example
let i = '10.5'; //string
let j = parseInt(i); //string to integer

console.log(j); //10 (integer)


//parseFloat() example

let k = '10.5'; //string
let l = parseFloat(k); //string to float

console.log(l); //10.5 (float)
console.log(typeof l); //number (float is a type of number in JavaScript)




