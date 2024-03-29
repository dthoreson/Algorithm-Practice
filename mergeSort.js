//MERGE SORT - W11D22

/* 
Stable sort.

Visualization:
https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/

Time Complexity
- Best case: O(n log(n)) linearithmic.
- Average case: O(n log(n)) linearithmic.
- Worst case: O(n log(n)) linearithmic.

Space: O(n) linear

steps:
1. create a merge function to merge two already sorted arrays into a single
    sorted array.
    - you do NOT need to work in place, ok to use a new array
2. create mergeSort function to sort the provided array
    - split the array in half and recursively merge the halves using the
        previously created merge function.
    - splitting of arrays stops when array can no longer be split.
    - an array of 1 item is by definition sorted, so two arrays of 1 item
        can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
/*
psuedocode:
- create a function that takes in two arrays 
- do a check to see which arr length is longer
    -set the longer array as the outer loop
-create an emptyarr variable that we can return at the end of the function
-start outer for loop to iterate through arr1 
    -start second loop through arr2
    -compare arr1[i] to arr2[j] and push smaller one to our empty arr
*/
function merge(left = [], right = []) {
    // if(left.length >= right.length){
    //     let arr1 = left;
    //     let arr2 = right;
    // }
    // else{
    //     let arr1 = right;
    //     let arr2 = left;
    // }
    let newArr = [];
    for (let i = 0; i < arr1.length;) {
        for (let j = 0; j < arr2.length;) {
            if (arr1[i] < arr2[j]) {
                newArr.push(arr1[i]);
                i++;
            }
            else if (arr2[j] < arr1[i]) {
                newArr.push(arr2[j]);
                j++;
            }
            else {
                newArr.push(arr1[i]);
                i++;
            }
        }
    }
    return newArr;
}
console.log(merge(sortedA4.sortedB4));

// mergeSort
const numbersOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numbersReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function merge(left = [], right = []) {
    let sortedMerged = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            sortedMerged.push(left[indexLeft]);
            indexLeft++;
        } else {
            sortedMerged.push(right[indexRight]);
            indexRight++;
        }
    }

    // in case one of the arrays has remaining items due to unequal lengths, all of those can be added
    while (indexLeft < left.length) {
        sortedMerged.push(left[indexLeft]);
        indexLeft++;
    }

    while (indexRight < right.length) {
        sortedMerged.push(right[indexRight]);
        indexRight++;
    }

    return sortedMerged;

    // one liner version of adding in any left over items
    // return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

/**
 * Creates a new sorted array based on the given numbers being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} numbers
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(numbers = []) {
    if (numbers.length === 1) {
        // return once we hit an array with a single item
        return numbers;
    }

    const middleIdx = Math.floor(numbers.length / 2);
    const left = numbers.slice(0, middleIdx);
    const right = numbers.slice(middleIdx);
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
}