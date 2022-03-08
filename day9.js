/*
  ***************Function Arrow Challenge***************

  Tasks:
  ====================================
  [1] One Statement In Function
  [2] Convert To Arrow Function
  [3] Print The Output [Arguments May Change]

*/

// let names = function(...args) {
//     // Parameter ?
//     let names = 'String ';
//     for (let i = 0; i < args.length; i++)
//         i !== args.length - 1 ?
//         (names += ' [' + args[i] + '],') :
//         (names += ' [' + args[i] + '] => Done !')
//     return names;
// };
let names = (...args) => {
    // Parameter ?
    let names = 'String ';
    for (let i = 0; i < args.length; i++)
        i !== args.length - 1 ?
        (names += ' [' + args[i] + '],') :
        (names += ' [' + args[i] + '] => Done !')
    return names;
}
console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/*
  Tasks 
  ================================= 
  [1] Replace ??? In Return Statement To Get The Output
  [2] Create The Same Function With Regular Syntax
  [3] Use Array Inside The Arguments To Get The Output 

*/

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one + two + Number(nums);

console.log(calc(10, myNumbers[0], myNumbers[1])); // 80