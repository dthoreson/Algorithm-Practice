/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

function oddOccurrencesInArray(nums) {
    var frequency = {};
    for (var i = 0; i< nums.length; i++){
        var value = nums[i];
        if (value in frequency) {
            frequency[value]++;
        }
        else {
            (frequency[value] = 1);
        }
    }
    for (var j=0; j<frequency.length; j++){
        if (frequency[value] %2 !== 0){
            console.log(value);
        }
    }
    return (frequency, value)
}

console.log(oddOccurrencesInArray(nums1))

/*****************************************************************************/