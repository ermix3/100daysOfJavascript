/*
  ***************Array Challenge***************
  
  Tasks:
  - Use different methods to get results with the variables that we have and without use number.
*/


let zero = 0,
    counter = 3,
    myFriends = ['Ahmed', 'Ermix', 'Elham', 'Reda', 'Jamal', 'Ameer'];

// Write Code Here

console.log(myFriends.slice(zero, ++counter).reverse()) // ["Reda", "Elham", "Ermix", "Ahmed"]; 

console.log(myFriends.slice(++zero, --counter)) // ["Elham", "Ermix"]

console.log(myFriends[zero]) // "Ermix"

console.log(myFriends[zero][counter] + myFriends[zero][zero + counter].toUpperCase()) // "iX"