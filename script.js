// 1 slajd
const a = 3;
let b = 1;

a = 4; // idalje će biti 3

if (true) {
  let c = "Vidljivo samo ovdje";
  var d = "vidljivo izvan bloka";
}

console.log(unutarBloka); // ReferenceError
console.log(staraVarijabla); // Radi (zbog var)

// 2 slajd

let str = "Tekst";           // String
let num = 105.45;          // Number
let bool = true;           // Boolean
let bigInt = 9007199254740991n;
let prazno = null;         // Namjerno prazno
let nepoznato;             // Undefined

// Složeni (Referentni) tipovi
let niz = [1, 2, 3];        // niz
let obj = { grad: "Zagreb" };// objekt

console.log(niz);
console.log(obj);


// 3 slajd     

let x = 10;
x += 5;              // x = 15
let parnost = x % 2; // 1 (neparan broj)

// Razlika prefiks / postfiks
let a = 5;
let b = a++; // b = 5, a postaje 6
let c = ++a; // c = 7, a postaje 7

// Spajanje teksta
let poruka = "Rezultat: " + (a + b);

