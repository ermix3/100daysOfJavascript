/*
  ***************Challenge 1***************
  let d = '-100',
   e = '20',
   f = 30,
   g = true;
  
  - Only Use Variables Value
  - Do Not Use Variable Twice
  
  console.log() // 2000
  console.log() // 173
*/
let d = '-100',
    e = '20',
    f = 30,
    g = true;

console.log(-d * e);
console.log(-parseInt(d) + f + 2 * parseInt(e) + 3 * Boolean(g));