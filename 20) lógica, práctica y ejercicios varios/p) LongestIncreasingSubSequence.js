function longestIncreasingSubsequence(nums) {
  // Your code here:
  /* solution: */
  let max = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      count++;
    } else {
      count = 0;
    }
    if (count > max) {
      max = count;
    }
  }
  return max + 1;
}

console.log(longestIncreasingSubsequence([3, 10, 4, 5])); //3
console.log(longestIncreasingSubsequence([3, 4, 2, 1, 10, 6])); //3
console.log(longestIncreasingSubsequence([10, 22, 9, 33, 20, 50, 41, 60, 80])); //6
console.log(
  longestIncreasingSubsequence([
    10, 22, 9, 33, 20, 50, 41, 60, 80, 21, 23, 24, 25, 26, 27, 28,
  ])
); //9

module.exports = longestIncreasingSubsequence;
