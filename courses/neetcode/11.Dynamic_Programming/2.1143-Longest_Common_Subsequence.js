/**
 * 1143. Longest Common Subsequence
 * https://leetcode.com/problems/longest-common-subsequence/
 */

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const DP = Array.from({ length: text1.length + 1 }, () =>
    Array(text2.length + 1).fill(0)
  )

  for (let i = text1.length - 1; i >= 0; i--) {
    for (let j = text2.length - 1; j >= 0; j--) {
      if (text1[i] == text2[j]) {
        DP[i][j] = 1 + DP[i + 1][j + 1]
      } else {
        DP[i][j] = Math.max(DP[i][j + 1], DP[i + 1][j])
      }
    }
  }

  return DP[0][0]
};