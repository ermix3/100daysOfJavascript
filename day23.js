/*
  ***************  SUM ALL PRIMES Challenge ***************
  *
  *Task:
  ====================================
    Function findMedian(n: array): int
    return the median of the prime numbers up to n.
    ex. findMedian(10) == 17
*/

function findMedian(n) {
    let arrSorted = n.sort((a, b) => a - b);
    return arrSorted[Math.floor(arrSorted.length / 2)];

}




console.log(findMedian([ 6,1, 2, 3, 8,4, 5, 7, 9, 10])); // 6
console.log(findMedian([ 1, 2, 3, 8, 4, 5, 7, 9, 12])); // 5
console.log(findMedian([1, 5, 20, 2, 3, 4, 11, 12, 6, 70, 8, 90, 10, 18, 13, 14])); // 11
