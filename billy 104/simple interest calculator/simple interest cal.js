//funtion to calculate simple interest
function calculatesimpleinterest(principal,rate,time) {
    return (principal * rate * time) / 100;
}

// Get input from the user 
let principal = parseFloat(prompt("Enter the principal amount:"));
let rate = parseFloat(prompt("Enter the annual interest rate (in %):"));
let time = parseFloat(prompt("Enter the time (in years):"));

//Validate inputs
if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    alert("please enter valid numerical values");
} else{
    // calculate simple interest
    let interest = calculatesimpleinterest(principal, rate, time);

    // Display the result
    alert("The simple interest is;" + interest)
}
