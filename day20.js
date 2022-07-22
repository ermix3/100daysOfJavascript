/*
  ***************  LETTER CHANGES Challenge ***************
  *
  *Task:
  ====================================
    Change every letter of the string to the one that follows it and capitalize the vowels
    Function letterChanges(str): string
    Z should turn to A
    ex.  ex. 'hello there' === 'Ifmmp UIfsf'
*/

function letterChanges(str) {
    const vowels = 'aeiou';
    // classique method
    // let result = '';
    // for (let i = 0; i < str.length; i++) {
    //     let newChar;
    //     if (str[i] !== ' ')
    //         if (str[i].toLowerCase() === 'z') newChar = 'a';
    //         else
    //             newChar = str[i] !== ' ' ? String.fromCodePoint(str[i].codePointAt(0) + 1) : str[i];
    //     else newChar = str[i];
    //     result += vowels.split('').includes(newChar) ? newChar.toUpperCase() : newChar;
    // }
    // return result;

    // 1rst method
    // return str.replace(/[a-z]/gi, (char) => {
    //     let newChar = char.toLowerCase()==='z' ? 'A' : String.fromCodePoint(char.codePointAt(0)+1);
    //     return [...vowels].includes(newChar) ? newChar.toUpperCase() : newChar;
    // });

    // 2nd method
    // return ([...str].map(char => {
    //     let newChar;
    //     if (char !== ' ')
    //         if (char.toLowerCase() === 'z') newChar = 'a';
    //         else
    //             newChar = char !== ' ' ? String.fromCodePoint(char.codePointAt(0) + 1) : char;
    //     else newChar = char;
    //     return [...vowels].includes(newChar) ? newChar.toUpperCase() : newChar;
    // })).join('');

    // 3rd method
    // return [...str].reduce((acc, char) => {
    //     let newChar;
    //     if (char !== ' ')
    //         if (char.toLowerCase() === 'z') newChar = 'a';
    //         else
    //             newChar = char !== ' ' ? String.fromCodePoint(char.codePointAt(0) + 1) : char;
    //     else newChar = char;
    //
    //     return [...vowels].includes(newChar) ? acc + newChar.toUpperCase() : acc + newChar;
    // }, '')

    // 4th method
    return str.toLowerCase()
        .replace(/[a-z]/g, char => {
            let newChar = String.fromCharCode(char.charCodeAt(0) + 1);
            return (char === 'z' ? 'A' : newChar );
        })
        .replace(/[aeiou]/g, vowel => vowel.toUpperCase());
}

console.log(letterChanges('hello there')); // 'Ifmmp UIfsf'
console.log(letterChanges('aoz zqx')); // 'bpA Ary'