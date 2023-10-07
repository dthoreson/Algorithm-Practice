// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

//TWO SUM - W12D29


/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Bonus: Make it O(n) time
*/

const numbers1 = [2, 11, 7, 15];
const targetSum1 = 9;
const expected1 = [0, 2];
// Explanation: numbers[0] + numbers[2] = 2 + 7 = 9. Return order doesn't matter.

const numbers2 = [10, 3, 2, 5, 4, -1];
const targetSum2 = 6;
const expected2 = [2, 4];

const numbers3 = [3, 8, 4, 1, 9, 0, -2];
const targetSum3 = 6;
const expected3 = [1, 6];

/**
 * Finds the indexes of the numbers that add up to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} numbers Unordered numbers.
 * @param {number} targetSum
 * @returns {Array<number>} The two indexes of the numbers in the given numbers
 *    that add up to the targetSum.
 */
function twoSum(numbers, targetSum) {
    let hash = {};
    for(let i = 0; i < numbers.length; i++){
        let targetVal = targetSum - numbers[i];
        if(hash.hasOwnProperty(targetVal)){
            return [hash[targetVal], i];
        }
        hash[numbers[i]] = i;
    }
}
console.log(twoSum(numbers1, targetSum1));
console.log(twoSum(numbers2, targetSum2));
console.log(twoSum(numbers3, targetSum3));