// 1. Parašykite funkciją, kuri suskaičiuotų visų teigiamų, lyginių skaičių, ne didesnių už duotą skaičių sumą. Skaičius iki kurio skaičiuosime paduodamas per funkcijos parametrą.   

// Funkcijai paduotas: n = 20(neįskaitant). 
// Tai skaičiai:
// 2  
// 4  
// 6  
// 8  
// 10  
// 12  
// 14  
// 16  
// 18  
// Suma: 90. 

"use strict"
const sumEvenNumbers = (n) => {
    let sum = 0;
    for (let i = 2; i < n; i += 2) {
        sum += i;
    }
    return sum;
}
let result = sumEvenNumbers(20);
console.log(` Suma ${result}`);  

