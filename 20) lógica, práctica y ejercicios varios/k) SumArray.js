function SumArray(arr, n) {
  // Your code here:
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) {
        return true;
      }
    }
  }
  return false;
}

console.log(SumArray([2, 4, 5, 9], 9)); // true
// console.log(SumArray([2, 4, 5, 9], 12)); // false
// console.log(SumArray([2, 5, 9], 4)); // false
// console.log(SumArray([4, 2, 9, 5], 7)); // true
// console.log(SumArray([5, 2, 9, 4], 12)); // false

module.exports = SumArray;

function SumArray(arr, n) {
  // Your code here:

  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) {
      return true;
    } else {
      hash[n - arr[i]] = true;
    }
  }
  return false;
}

console.log(SumArray([2, 4, 5, 9], 9)); // true
// console.log(SumArray([2, 4, 5, 9], 12)); // false
// console.log(SumArray([2, 5, 9], 4)); // false
// console.log(SumArray([4, 2, 9, 5], 7)); // true
// console.log(SumArray([5, 2, 9, 4], 12)); // false

module.exports = SumArray;
