/*
  *************** FIZZBUZZ Challenge ***************
  *
  *Tasks:
  ====================================
    Function fizzBuzz(n: number): string
    Return a string with the first letter of every word capitalized
    * For multiple of 3 print "Fizz"
    * For multiple of 5 print "Buzz"
    * For numbers which are multiples of both 3 and 5, print "FizzBuzz".

    ex. fizzBuzz('i love javascript') === 'I Love Javascript'
    Write a program that prints all the numbers from 1 to 100. , .
 */
function fizzBuzz(i) {
    // if (i % 3 === 0 && i % 5 === 0) {
    //     return 'FizzBuzz';
    // }
    // if (i % 3 === 0) {
    //     return 'Fizz';
    // }
    // if (i % 5 === 0) {
    //     return 'Buzz';
    // }

    // return i;
    // 2nd method
    // if (i % 3 === 0 && i % 5 === 0) {
    //     return 'FizzBuzz';
    // } else if (i % 3 === 0) {
    //     return 'Fizz';
    // } else if (i % 5 === 0) {
    //     return 'Buzz';
    // } else {
    //     return i;
    // }

    // 3rd method
    return (i % 3 === 0 && i % 5 === 0)
        ? 'FizzBuzz' : (i % 3 === 0)
            ? 'Fizz' : (i % 5 === 0)
                ? 'Buzz' : i;
}

for (let i = 1; i <= 100; i++)
    console.log(fizzBuzz(i));