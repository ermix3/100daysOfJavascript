/*
  ***************  LONGEST WORD Challenge ***************
  *
  *Tasks:
  ====================================
    Function longestWord(str: string): string
    Return the longest word of a string
    ex. longestWord('Hi there, my name is Brad') === 'there,'
*/

const longestWord = str => {
  let strArr = str.split(' ');
  
	// 1rst method
	// let maxWord = '';
	// let lengthWord = 0;
	// strArr.forEach((e, i) => {
	// 	if (e.length > lengthWord) {
	// 		lengthWord = e.length;
	// 		maxWord = strArr[i];
	// 	}
	// });
	// return maxWord;

	// 2nd method
	// return strArr[
	// 	strArr.map(e => e.length).indexOf(Math.max(...strArr.map(e => e.length)))
	// ];

	// 3rd method
	// return strArr.reduce((a, b) => (a.length > b.length ? a : b));

	// 4nd method
	return strArr.sort((a, b) => b.length - a.length)[0];
};

console.log(longestWord('Hi there, my name is Brad nnnnnnnn')); // 'there,'
console.log(longestWord('hello world, Js is the best lang.')); // 'world,'
