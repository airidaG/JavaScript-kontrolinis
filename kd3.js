// Parašykite funkciją, kuri prašytų įvesti skaičių tol, kol neįvedamas neigiamas skaičius. Kai įvedamas neigiamas, funkcija išveda visų įvestų teigiamų skaičių sumą ir baigia darbą. Panaudokite ciklą while.

"use strict"

const sumTeigiami  = () => {
    let suma = 0;

    while (true) {
        let ivestasSkaicius = parseFloat(prompt("Įveskite skaičių:"));

        if (ivestasSkaicius < 0) {
            break;
        }
        suma += ivestasSkaicius;
    }
    console.log("Teigiamų skaičių suma: " + suma);
}

sumTeigiami();
