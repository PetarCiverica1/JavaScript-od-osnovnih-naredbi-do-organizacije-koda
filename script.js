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
        