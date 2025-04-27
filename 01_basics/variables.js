//in javascript we can declare variables using var, let, and const


 var name = "John"; //it is old type(not recomended) // var is function scoped and can be redeclared
 let age = 30; //let is block scoped and can be reassigned but not redeclared in the same block
 const pi = 3.14; //const is block scoped and cannot be reassigned or redeclared in the same scope



 console.log(nam); //undefined
 var nam = "ram";
 // var is hoisted to the top of the function or global scope, but its actual value is not initialized until the line of code is executed //by default it is undefined


//let and const same concept.
 console.log(nam);//ReferenceError: Cannot access 'id' before initialization
 let id= 1; 
 //In JavaScript, let and const is hoisted, but it behaves differently from var. Variables declared with let are hoisted to the top of their block, but they are not initialized. This creates a "temporal dead zone" (TDZ) from the start of the block until the declaration is encountered. During this TDZ, accessing the variable will throw a ReferenceError.

//imp 
//When var is hoisted → it is initialized as undefined immediately
//When let (or const) is hoisted → it is NOT initialized immediately.
//It stays in a special state called Temporal Dead Zone (TDZ) until the code reaches let a;.

      //TDZ is the time between the start of the block and the declaration of the variable. During this time, if you try to access the variable, you will get a ReferenceError. This is because the variable is hoisted but not initialized yet.

      //TDZ is a period of time during which the variable is in scope but not yet declared. If you try to access it during this time, you'll get a ReferenceError.





//concept of hoisting in js   (from namaste javascript)

//concept of TDZ in js   (from namaste javascript)


