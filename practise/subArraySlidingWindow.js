// function findAvgOfSubarrays(arr, k) {
//   let result = [];
//   for (let i = 0; i < arr.length - k + 1; i++) {
//     let sum = 0;
//     for (let j = i; j < i + k; j++) {
//       sum += arr[j];
//     }
//     result.push(sum / k);
//   }
//   console.log("result", result);
// }



function findAvgOfSubarrays(arr, k) {
  let result = [];
  for (let i = 0; i < arr.length - k + 1; i++) {
    let sum = 0;
    for (j = i; j < i + k; j++) {
      sum += arr[j];
    }
    result.push(sum / k);
  }
  console.log(result);
}

findAvgOfSubarrays([1, 3, 2, 6, -1, 4, 1, 8, 2], 5);
