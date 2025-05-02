alert("hello world");
//alert is a built-in function in JavaScript that displays an alert dialog box with a specified message and an OK button. It is often used for debugging or to provide information to the user. The alert dialog box is modal, meaning it blocks interaction with the rest of the page until the user dismisses it by clicking the OK button.

// it return the undefined value
// let a = alert("hello world"); 
// console.log(a); //undefined


confirm("are you sure");
//confirm is a built-in function in JavaScript that displays a dialog box with a specified message, an OK button, and a Cancel button. It is often used to ask the user for confirmation before proceeding with an action. The confirm dialog box is modal, meaning it blocks interaction with the rest of the page until the user dismisses it by clicking either the OK or Cancel button. 

// The function returns true if the user clicks OK and false if the user clicks Cancel.
// let b = confirm("are you sure");
// console.log(b); //true or false based on user input  



prompt("enter your name");
//prompt is a built-in function in JavaScript that displays a dialog box with a specified message, an input field, an OK button, and a Cancel button. It is often used to ask the user for input. The prompt dialog box is modal, meaning it blocks interaction with the rest of the page until the user dismisses it by clicking either the OK or Cancel button.

// The function returns the input value as a string if the user clicks OK, or null if the user clicks Cancel.
// let c = prompt("enter your name");
// console.log(c); //string or null based on user input 