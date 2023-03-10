/* 
    Given an arr and a separator string, output a string of every item in the array separated by the separator.
    
    No trailing separator at the end
    Default the separator to a comma with a space after it if no separator is provided
*/

const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-7 mins to write the pseudocode here:

// 1 - creating a join function that can take in an array and a separator
// 2 - create a variable called newString = "blank string"
// 3 - create a for loop that iterates through the array
// 4 - add character from array into new string
// 5 - if statement in order to add in the separator into the array
// 6 - add separator to new string
// 7 - outside of both statements, return newString
// 8 - call the function
// 9 - console.log new function


// create the function and decide what params it needs and what it will return




// 1 - creating a join function that can take in an array and a separator
function join(arr, separator) {
    var newStr = "" // 2 - create a variable called newString = "blank string"
    for (var i = 0; i < arr.length; i++) { // 3 - create a for loop that iterates through the array
        newStr += (arr[i]); // 4 - add character from array into newStr
        if (i < arr.length - 1) { // 5 -if statement in order to add in the separator into the array based on arr.length
            newStr += separator; // 6 - add separator to newStr
        }
    }
    return newStr // 7 - outside of both statements, return newStr
}

// 8 - call the function
// 9 - console.log new function
console.log(join(arr1, separator1))
console.log(join(arr2, separator2))
console.log(join(arr3, separator3))
console.log(join(arr4, separator4))
console.log(join(arr5, separator5))

