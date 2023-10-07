//PARTITION AND QUICKSORT - W11D24

/* 
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
    Create a function that uses yesterday’s partition to fully sort an array
    in-place.
    Unstable sort.
    
    Time Complexity
        - Best: O(n log(n)) linearithmic.
        - Average: O(n log(n)) linearithmic.
        - Worst: O(n^2) quadratic.
    
    Space: O(1) constant.
    Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be the
        last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
    Steps:
    - start by partitioning the full array
        (use the previously built partition algo).
    - then partition the left side of the array
        (left of the returned partition idx) and the right side
        (right of the returned partition idx), recursively.
*/

const { partition } = require('../partition');

const numbers1 = [11, 8, 14, 3, 6, 2, 7];
const expected1 = [2, 3, 6, 7, 8, 11, 14];

const numbers2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

const numbers3 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const expected3 = [2, 3, 3, 3, 6, 7, 8, 11, 14];

const numbers4 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected4 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

/**
 * Recursively sorts the given array in-place by mutating the array.
 * Best: O(n log(n)) linearithmic.
 * Average: O(n log(n)) linearithmic.
 * Worst: O(n^2) quadratic.
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization.
 * @param {Array<number>} numbers
 * @param {number} left The index indicating the start of the slice of the
 *    given array being processed.
 * @param {number} right The index indicating the end of the slice of the
 *    given array being processed.
 * @returns {Array<number>} The given array after being sorted.
 */

function partition(numbers, leftIdx = 0, rightIdx = numbers.length - 1) {
    const midIdx = Math.floor((leftIdx + rightIdx) / 2);
    const pivotValue = numbers[midIdx];
    const tempPivotIdx = rightIdx;

    // Swap the pivot to the end of the section being partitioned so its
    // position can be kept track of, then move it last to its final position.
    [numbers[midIdx], numbers[tempPivotIdx]] = [numbers[tempPivotIdx], numbers[midIdx]];

    // Skip over the pivot that was moved to the end so it stays there for now.
    rightIdx = tempPivotIdx - 1;

    // Look for a num on the left and on the right that both need to be moved to
    // the other side so one swap can move both of them to the correct side.
    while (true) {
        // Move leftIdx until we find a num that is out of place.
        while (numbers[leftIdx] < pivotValue) {
            leftIdx += 1;
        }

        // Move rightIdx until we find a num that is out of place.
        while (numbers[rightIdx] > pivotValue) {
            rightIdx -= 1;
        }

        // All numbers have been iterated over, partitioning is complete.
        if (leftIdx >= rightIdx) {
            // Swap the pivot to it's final location.
            [numbers[tempPivotIdx], numbers[leftIdx]] = [numbers[leftIdx], numbers[tempPivotIdx]];
            return leftIdx;
        }

        // Swap the two out of place numbers so they will both be on the correct side.
        [numbers[leftIdx], numbers[rightIdx]] = [numbers[rightIdx], numbers[leftIdx]];

        // After swapping, we're done with this pair, move on.
        leftIdx += 1;
        rightIdx -= 1;
    }
}
console.log(partition(numbers1));
console.log(partition(numbers2));
console.log(partition(numbers3));
console.log(partition(numbers4));

/**
 * Iteratively sorts the given array in-place by mutating the array. This is
 * faster than recursion because it's the same iterations but fewer function
 * calls.
 * Best: O(n log(n)) linearithmic.
 * Average: O(n log(n)) linearithmic.
 * Worst: O(n^2) quadratic.
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization.
 * @param {Array<number>} numbers
 * @param {number} left The index indicating the start of the slice of the
 *    given array being processed.
 * @param {number} right The index indicating the end of the slice of the
 *    given array being processed.
 * @returns {Array<number>} The given array after being sorted.
 */



function quickSort(numbers = [], left = 0, right = numbers.length - 1) {
    if (left < right) {
        const pivotIndex = partition(numbers, left, right);
        quickSort(numbers, left, pivotIndex);
        quickSort(numbers, pivotIndex + 1, right);
    }
    return numbers;
}

