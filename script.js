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
