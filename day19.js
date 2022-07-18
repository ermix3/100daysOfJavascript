/*
  ***************  FLATTEN ARRAY Challenge ***************
  *
  *Task:
  ====================================
    Function flattenArray(arr:array, len:int): array
    Take an array of arrays and flatten to a single array
    ex. flattenArray([[1, 2], [3, 4], [5, 6], [7]]) => [1, 2, 3, 4, 5, 6, 7]
*/


function flattenArray(arrayOfArrays) {
  // classique method
  // let result = [];
  // for (let array of arrayOfArrays) {
  //   result = result.concat(array);
  // }
  // return result;

  // 1rst method
  // let arr = [];
  // arrayOfArrays.forEach(element => arr.push(...element));
  // return arr;
  
  // 2nd method
  // return arrayOfArrays.reduce((a, b) => a.concat(b), []);  
  
  // 3rd method
  // return [].concat.apply([], arrayOfArrays);
  
  // 4th method
  return [].concat(...arrayOfArrays);
}

console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]])); // [1, 2, 3, 4, 5, 6, 7]