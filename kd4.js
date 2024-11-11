// Duotas masyvas, parašykite funkciją, kur naudoja metodą filter ir išrenka duomenis pagal užklausą.  Funkcijai paduodama masyvas ir paieškos frazė, funkcija grąžina atrinktus rezultatus masyve, išrikiuotus abecėlės tvarka ir prie kiekvieno vardo pridėta žvaigždutė. 

// const friends = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];

// console.log(filterItems(friends, 'ka')); // ["*Marika", "*Rika"];
// console.log(filterItems(friends, 'e')); // ["*Alex", "*Oliver"];


"use strict"


const filterItems = (arr, query) => {
    const filtered = arr.filter(item => item.toLowerCase().includes(query.toLowerCase()));

    return filtered
        .sort()
        .map(item => `*${item}`);
};

const friends = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];

console.log(filterItems(friends, 'ka'));
console.log(filterItems(friends, 'e')); 