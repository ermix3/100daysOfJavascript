/*
  ***************  SUM ALL PRIMES Challenge ***************
  *
  *Task:
  ====================================
    Function sumAllPrimes(nums): array
    Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
    ex. sumAllPrimes(10) == 17
*/

function isPrime(n) {
    for (let i = 2; i < n; i++)
        if (n % i === 0)
            return false;

    return true;
}
function sumAllPrimes(num) {
    // Classique method
    // let sum = 0;
    // for (let i = 2; i <= num; i++) {
    //     if (isPrime(i)) sum += i;
    // }
    // return sum;

    // 1rst method
    // return [...Array(num ).keys()].reduce((acc, i) => {
    //     return isPrime(i) ? acc + i : acc;
    // }, 0);

    // 2nd method
    // return [...Array.from({ length: num }, (_, i) => i + 1)].reduce((acc, cur) =>(cur!==1 && isPrime(cur)) ? acc + cur : acc, 0);

    // 3rd method
    return [...Array(num + 1).keys()].reduce((acc, i) => (i>1 && isPrime(i)) ? acc + i : acc,0);
}



console.log(sumAllPrimes(10)); // 17
console.log(sumAllPrimes(55)); // 381
