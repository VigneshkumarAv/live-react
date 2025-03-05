import React from "react";

const ArrayDpCoding = () => {
  /*   function maxCalories(N, A) {
    if (N === 0) return 0;
    if (N === 1) return A[0];
    if (N === 2) return A[0] + A[1];

    // dp[i] will store the maximum calories the girl can eat up to the i-th day
    let dp = new Array(N);

    // Base cases
    dp[0] = A[0];
    dp[1] = A[0] + A[1];
    dp[2] = Math.max(A[0] + A[1], A[1] + A[2], A[0] + A[2]);

    // Fill the dp array for the remaining days
    for (let i = 3; i < N; i++) {
      dp[i] = Math.max(
        dp[i - 1], // Skip the current day
        dp[i - 2] + A[i], // Eat the current day and skip the previous day
        dp[i - 3] + A[i - 1] + A[i] // Eat the current and previous day, skip the one before
      );
    }

    // The answer will be the maximum calories on the last day
    return dp[N - 1];
  }

  // Sample input
  const N = 5;
  const A = [3, 1, 2, 3, 10];

  // Sample output
  console.log(maxCalories(N, A)); // Output will be 12
 */
  /*   const N = 5;
  const A = [3, 1, 2, 3, 10];
 */
  const N = 8;
  const A = [1, 4, 6, 8, 3, 9, 1, 2];

  let consecutiveDays = Math.floor(N / 3);
  const sortedArray = A.sort((a, b) => b - a);
  //console.log("sortedarr", sortedArray, consecutiveDays);
  let count = N - consecutiveDays;
  const result = sortedArray.reduce((acc, curr) => {
    if (count > 0) acc = acc + curr;
    count--;
    return acc;
  }, 0);

  console.log(result);

  return <div></div>;
};

export default ArrayDpCoding;
