/*
  ***************  ARRAY CHUNKING Challenge ***************
  *
  *Tasks:
  ====================================
    Function chunkArray(arr:array, len:int): array
    Return array of arrays
    Split an array into chunked arrays of a specific length.
    ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
    ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
*/

const chunkArray= (arr, len) => {
  // 1rst method
  // let result = [];
  // let i = 0;
  // while (i < arr.length) {
  //   result.push(arr.slice(i, i + len));
  //   i += len;
  // }
  // return result;

  // 2nd method
  return arr.reduce((acc, curr, i) => {
    if (i % len === 0) {
      acc.push([]);
    }
    acc[acc.length - 1].push(curr);
    return acc;
  }, []);

}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3)); // [[1, 2, 3],[4, 5, 6],[7]]
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2)); // [[1, 2],[3, 4],[5, 6],[7]]