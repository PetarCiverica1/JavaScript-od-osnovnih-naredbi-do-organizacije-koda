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
let e = 5;
let f = a++; // b = 5, a postaje 6
let g = ++a; // c = 7, a postaje 7

// Spajanje teksta
let poruka = "Rezultat: " + (a + b);

// slajd 4

console.log(5 == "5");  // true 
console.log(5 === "5"); // false 

let dob = 20;
let dozvola = true;

let mozeVoziti = (dob >= 18) && dozvola; // AND
let popust = (dob < 18) || (dob > 65);   // OR

let aktivan = true;
console.log(!aktivan); // false

// slajd 5

let bodovi = 85;

if (bodovi >= 90) {
  console.log("Ocjena: Izvrstan (5)");
} else if (bodovi >= 80) {
  console.log("Ocjena: Vrlo dobar (4)");
} else {
  console.log("Ocjena: Prolaz");
}


let uloga = "admin";

switch (uloga) {
  case "admin":
    console.log("Puni pristup system-u");
    break;
  case "urednik":
    console.log("Pristup sadržaju");
    break;
  default:
    console.log("Ograničen pristup");
}
// 6 slajd

for (let i = 0; i < 3; i++) {
  console.log("brojac:", i);
}

let n = 0;
while (n < 3) {
  n++;
}

const voće = ["jabuka", "banana"];
for (const item of voće) {
  console.log(item);
}

// slajd 7
function zbroji(a, b) {
  return a + b;
}

let rezultat = zbroji(5, 3);

console.log(rezultat);


function pozdrav(ime) {
  console.log("Bok " + ime);
}

pozdrav("Petar");
pozdrav("Marko");

//slajd 8

class Osoba {
  constructor(ime) {
    this.ime = ime;
  }

  predstaviSe() {
    console.log(`Ja sam ${this.ime}`);
  }
}

const ivan = new Osoba("Ivan");
ivan.predstaviSe();

// slajd 9
try {
    let rezultat = 10 / 0;
    console.log(rezultat);
}
catch (error) {
    console.log("Dogodila se pogreška!");
}