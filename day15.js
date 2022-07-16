/*
  ***************  MAX CHARACTER Challenge ***************
  *
  *Tasks:
  ====================================
    Function maxCharacter(str: string): string
    Return the character that is most common in a string
    ex. maxCharacter('javascript') == 'a'
 */
//
function maxCharacter(str) {
    // 1rst method
    // let max = 0;
    // let maxChar = '';
    // for (let i = 0; i < str.length; i++) {
    //     let count = 0;
    //     for (let j = 0; j < str.length; j++) {
    //         if (str[i] === str[j]) {
    //             count++;
    //         }
    //     }
    //     if (count > max) {
    //         max = count;
    //         maxChar = str[i];
    //     }
    // }
    // return maxChar;


    // 2nd method
    // let countWord= {};
    // [...str].forEach(word =>(countWord[word]) ? countWord[word]++ : countWord[word] = 1);
    // return Object.keys(countWord).reduce((a, b) => countWord[a] > countWord[b] ? a : b);

    // 3rd method
    return [...str].reduce((a, b) => {
        return [...str].filter(c => c === a).length > [...str].filter(c => c === b).length ? a : b;
    });
}

console.log(maxCharacter('hello js world')); // 'l'