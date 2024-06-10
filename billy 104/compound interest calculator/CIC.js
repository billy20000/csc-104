function calculatecompoundinterest() {
    let principal = parseFloat(prompt("Enter the principal amount"));
    let rate = parseFloat(prompt("Enter the annual interest rate (in %):")) / 100;
    let time = parseFloat(prompt("Enter the time in year"));
    let compoundfrequency = parseFloat(prompt("Enter the number of times interest is compunded per years:"));

    let amount = principal* Math.pow((1 + rate/compoundfrequency),(compoundfrequency*time));  
    let interest = amount-principal;
    
    alert("the compound interest is: " + interest.toFixed(2));
    alert("the total amount is: " + amount.toFixed(2));
}

