function converttoNaira() {
    return (dollar * 1500);
}

//Get input from the user
let dollar = parseFloat(prompt("enter the amount in us dollar:"));
//Validate prompt input
if(isNaN(dollar)) {
    alert ("please enter a valid numerical value")
} else {
    // convert to naira
    let naira=converttoNaira();

    // Display the result
    alert(dollar + "USD is equal to" + naira.toFixed(2) + "NGN");
}