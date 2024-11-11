// Palūkanas skaičiuokite pagal formulę: 
// S.I. = (P × R × T)/100, 
// kur P = Amount, R = Rate of Interest in % per annum, ir T = No. of Years.

"use strict"

document.getElementById('calculator').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const amount = parseFloat(document.getElementById('amount').value);
    const interestRate = parseFloat(document.getElementById('myRange').value);
    const years = parseInt(document.getElementById('years').value);

  
    if (isNaN(amount) || isNaN(interestRate) || isNaN(years) || amount <= 0 || years <= 0) {
        document.getElementById('result').innerHTML;
        return;
    }

    const interest = (amount * interestRate * years) / 100;

    document.getElementById('result').innerHTML = `
        <p>Amount: ${amount}</p>
        <p>Interest Rate: ${interestRate}%</p>
        <p>Years: ${years}</p>
        <p>Simple Interest: ${interest.toFixed(2)}</p>
        <p>Total Amount (Principal + Interest): ${(amount + interest).toFixed(2)}</p>
    `;
});
