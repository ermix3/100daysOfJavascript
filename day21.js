/*
  ***************  ADD ALL NUMBERS Challenge ***************
  *
  *Task:
  ====================================
    Function addAll(nums): array
    Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
    ex. addAll(2,5,6,7) === 20
*/


function addAll(...nums) {
    // classique method
    // let sum = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     sum += nums[i];
    // }
    // return sum;

    // 1rst method
    // let sum=0;
    // for(let num of nums) sum+=num;
    // return sum;

    // 3rd method
    // let sum=0;
    // nums.forEach(num => sum += num);
    // return sum;

    // 4th method
    return nums.reduce((acc, cur) =>  acc + cur, 0);
}


console.log(addAll(2,5,6,7)); // 20
