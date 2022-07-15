/*
  *************** VALIDATE A PALINDROME Challenge ***************
  *
  *Tasks:
  ====================================
    Function isPalindrome(str: string): boolean
    Return true if palindrome and false if not
    ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
 */

function isPalindrome(str) {
    // let strInverse='' ;
    // for (let i=0; i<str.length; i++) {
    //     strInverse += str[str.length-i-1];
    // }
    // return strInverse === str;
    // return str.split('').reverse().join('') === str;
    return [...str].reduce((acc, curr) => curr + acc , '') === str;
}

console.log(isPalindrome('hello')); // false
console.log(isPalindrome('racecar')); // true