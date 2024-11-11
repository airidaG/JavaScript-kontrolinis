// Parašykite arrow funkciją `positives`, kuriai pateikiamas skaičių masyvas ir kuri grąžina naują masyvą, kuriame yra duotame masyve esantys teigiami skaičiai.
// - positives([1, -3, 5, -3, 0]) --> [1, 5]
// - positives([1, 2, 3]) --> [1, 2, 3]
// - positives([-1, -2, -3]) --> []
// Jei paduoti neteisingi duomenys, t. y. ne masyvas, funkcija  praneša apie tai ir nutraukia darbą. 


"use strict"

const positives = (arr) => {
    if (!Array.isArray(arr)) {
        console.error(`Pateikti neteisingi duomenys: turi būti masyvas.`);
        return;
    }
    return arr.filter(num => num > 0);
};

// Pvz:
// console.log(positives([1, -3, 5, -3, 0]));  
// console.log(positives([1, 2, 3]));          
// console.log(positives([-1, -2, -3]));      

console.log(positives("not array")); 