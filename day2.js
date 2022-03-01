/*
  ***************Number Challenge***************
 
 Task:
 - Find Smallest Number In All Variables And Return Integer
 - Use Variables a + d One Time To Get The Needed Output
 - Get Integer "2" From d Variable With 4 Methods
 - Use Variables b + d To Get This Valus
*/

let a = 100,
    b = 200.5,
    c = 1e2,
    d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.floor(Math.min(a, b, c, d)));

// Use Variables a + d One Time To Get The Needed Output
console.log((a * 100) + d * 0); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(parseInt(String(d)));
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));

// Use Variables b + d To Get This Valus
console.log((Math.floor(b) / 3).toFixed(2) + d * 0) // 66.67 => String
console.log(Math.floor(b / 3) + Math.trunc(d)) // 67 => Number