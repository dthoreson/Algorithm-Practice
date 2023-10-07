// Monday 5/30/2023 Algos Practice //
// 1913 Maximum Product Difference Between Two Pairs // 

// The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

// For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

// Return the maximum such product difference.

// Example 1:

// Input: nums = [5,6,2,7,4]
// Output: 34
// Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
// The product difference is (6 * 7) - (2 * 4) = 34.
// Example 2:

// Input: nums = [4,2,5,9,7,4,8]
// Output: 64
// Explanation: We can choose indices 3 and 6 for the first pair (9, 8) and indices 1 and 5 for the second pair (2, 4).
// The product difference is (9 * 8) - (2 * 4) = 64.

// Constraints:

// 4 <= nums.length <= 104
// 1 <= nums[i] <= 104

/////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @param {number[]} nums
 * @return {number}
 */

    var maxProductDifference = function(nums) {
        //we need to first make sure that we set the variables for max and min for the appropriate starting values***if we set them all as nums[0] we will end up facing issues with our values not holding the two values for the min/max 
        if(nums[0] > nums[1]){
            var max = nums[0];
            var secondMax = nums[1];
            var min = nums[1];
            var secondMin = nums[0];
        }
        else {
            var max = nums[1];
            var secondMax = nums[0];
            var min = nums[0];
            var secondMin = nums[1];
        }
        for(let i = 2; i < nums.length; i++){
            if(nums[i] < secondMin){
                if(nums[i] < min){
                    secondMin = min;
                    min = nums[i];
                } else {
                    secondMin = nums[i];
                }
            }
            if(nums[i] > secondMax){
                if(nums[i] > max){
                    secondMax = max;
                    max = nums[i];
                } else {
                    secondMax = nums[i];
                }
            }
        }
        console.log(min, secondMin, secondMax, max);
        return max * secondMax - min * secondMin
    };
    console.log(maxProductDifference([5,6,2,7,4]));
    console.log(maxProductDifference([1,6,7,5,2,4,10,6,4]));
    console.log(maxProductDifference([4,2,5,9,7,4,8]));
