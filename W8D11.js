/*
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).

  Return -1 if none exist.
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [1, 1, 0, 2];
const expected3 = 2;


// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:
//  Create a function that accepts an array
//  Create a sum variable for left sum and one for right sum (leftSum and rightSum)
    //  create a for loop to iterate through the array forwards
        //  add each index values to sum variable to leftSum
        //  for loop from the right to left of array 
            // add each index values to right sum variable
        // if statement to check if leftSum and rightSum are the same:
            // check to see if one index is left
                //  if true return index
    


// create the function and decide what params it needs and what it will return
function balanceIndex(arr){
    var leftSum = arr[0]
    var rightSum = arr[arr.length-1]
    var counter = 2
    if (leftSum == rightSum){
        if(arr.length === 3){
            return 1
        }
    }
    for(var x =1; x<arr.length-1; x++){
        leftSum += arr[x]
        counter++
        if (leftSum == rightSum){
            if(arr.length - counter == 1){
                return arr[x+1]
            }
    }
    for(var y = arr.length-2; y>x; y--){
        leftSum += arr[y]
        counter++
        if (rightSum == leftSum){
            if(arr.length - counter == 1){
                return arr[y-1]
            }
        }
    }
    return -1
}