/*
  *************** REVERSE A STRING Challenge ***************
  *
  *Tasks:
  ====================================
    Function reverseString(str: string): string in reverse
    ex. reverseString('hello') === 'olleh'
    *

 */

function reverseString(str) {
    // method without built in functions
    let reversedString = "";
    for(char of str)
        reversedString = char + reversedString;
    return reversedString;

    // first method
    // return str.split('').reverse().join('');
    // return [...str].reverse().join('');

    // second method
    // let revString = '';
    // for(let char of str) {
    //   revString = char + revString;
    // }
    // return revString;

    // third method
    // let revString = '';
    // str.split('').forEach(char => revString = char + revString); // [...str].forEach(char => revString = char + revString)
    // return revString;

    // fourth method
    // return str.split('').reduce((acc, current) => current + acc, '');
    // return [...str].reduce((acc, current) => current + acc, '');

    // fifth method
    // const arr=[...str];
    // return arr.map((char,i,arr)=>arr[arr.length-1-i]).join('');

}

console.log(reverseString('hello')); // 'olleh'