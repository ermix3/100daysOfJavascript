/*
  ***************  EVEN & ODD SUMS Challenge ***************
  *
  *Task:
  ====================================
    Function evenOddSums(arr: Array): Array
    Take in an array and return an array of the sums of even and odd numbers
    ex. evenOddSums([50, 60, 60, 45, 71]) == [170, 116]
*/

function evenOddSums(arr) {
    // Classique method
    // let oddSum = 0;
    // let evenSum = 0;
    // for(let num of arr)
    //     num%2 === 0 ? evenSum += num : oddSum += num;
    // return [ evenSum, oddSum];

    // 1st method
    // let evenOddSums= [0, 0];
    // arr.forEach(num => num % 2 === 0 ? evenOddSums[0] += num : evenOddSums [1]+= num);
    // return evenOddSums;

    // 2nd method
    // return arr.reduce((acc, num) => {
    //     num % 2 === 0 ? acc[0] += num : acc[1] += num;
    //     return acc;
    // }, [0, 0]);

    // 3rd method
    return [arr.filter(num => num % 2 === 0).reduce((a, b) => a + b), arr.filter(num => num % 2 !== 0).reduce((a, b) => a + b)];
}


console.log(evenOddSums([50, 60, 60, 45, 71])); // [170, 116]