/*
  ***************String Challenge***************
 
  Tasks:
  - All Solutions Must Be In One Chain
  - You Can Use Concatenate

*/

let a = 'Ermix Dev School';

// Include This Method In Your Solution [slice, charAt]
console.log('m'.toUpperCase() + a.slice(3, 5)); // Mix

// 8 H
console.log(a.charAt(a.lastIndexOf('h')).toUpperCase().repeat(8)) // HHHHHHHH

// Return Array
console.log(a.split(' ', 1)); // ["Ermix"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0,5)} ${a.substr(a.lastIndexOf('S'))}`); // Ermix School

// Solution Must Be Dynamic Because String May Changes
console.log(`${a.charAt(0).toLowerCase()}${a.substr(1).toUpperCase()}`); // eRMIX DEV SCHOOl