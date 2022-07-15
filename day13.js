/*
  *************** CAPITALIZE LETTERS Challenge ***************
  *
  *Tasks:
  ====================================
    Function capitalizeLetters(str: string): string
    Return a string with the first letter of every word capitalized
    ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
 */
function capitalizeLetters(str) {
    let strArray = str.split(' ');
    // let strCap='' ;
    // for (let i=0; i<strArray.length; i++) {
    //     strCap += strArray[i][0].toUpperCase() + strArray[i].slice(1) + ' ';
    // }
    // return strCap ;
    // return strArray.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    return strArray.reduce((acc, curr) => acc + curr[0].toUpperCase() + curr.slice(1)+' ', '');
}

console.log(capitalizeLetters('hello js world')); // 'Hello Js World'