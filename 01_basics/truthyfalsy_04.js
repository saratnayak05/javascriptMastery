//falsy values
// falsy values are values that evaluate to false in a boolean context. In JavaScript, the following values are considered falsy:
/*Value	    Description
 false	   The Boolean false
0	       Number zero
-0	       Negative zero
0n	       BigInt zero
""	        Empty string
null	     Null value
undefined	Undefined value
NaN	        Not-a-Number */

//example 
if (0) {    
    console.log("This will not be executed");
} 

//example 

if(0n) {    
    console.log("This will not be executed");
}


//truthy values
// truthy values are values that evaluate to true in a boolean context. In JavaScript, all values are considered truthy except for the following falsy values: false, 0, -0, 0n, "", null, undefined, and NaN.
/*Value	    Description 
"hello" (non-empty string)

42 (any non-zero number)

[] (empty array)

{} (empty object)

function() {} (any function)*/


//example
if ("hello") {    
    console.log("This will be executed"); // This will be executed
}   

//example
if ({}) {    
    console.log("This will be executed"); // This will be executed
}