/*
  ***************  ANAGRAM Challenge ***************
  *
  *Task:
  ====================================
    Function isAnagram(arr:array, len:int): array
    Return true if anagram and false if not
    ex. isAnagram('elbow','below') => true
    ex. isAnagram('Dormitory','dirty room##') => false
*/

function isAnagram(str1, str2) {
  // classique method
  // var str1 = str1.toLowerCase().split('').sort().join('');
  // var str2 = str2.toLowerCase().split('').sort().join('');
  // if (str1 === str2) {
  //   return true;
  // } else {
  //   return false;
  // }

  // 1rst method
  // return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');

  // 2nd method
  return [...str1.toLowerCase()].sort().join('') === [...str2.toLowerCase()].sort().join('');
}

console.log(isAnagram('elbow', 'below')); // true
console.log(isAnagram('Dormitory', 'dirtyroom')); // true
console.log(isAnagram('Dormitory', 'dirty room##')); // false