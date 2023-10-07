/* 
Make Frequency Table:
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

//             V
const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

// 1. Driver 🚗 - Tuan
// 2. Presenter 👩‍💻 Hector
// 3. Navigator 🧭 Danielle

// pseudocode here

// 1. create a function that takes in an arr
// 2. create an empty var: hashmap = {}
    // 3. create for loop to iterate through the array
        // 4. if arr[1] already inside hashmap: count++
        // 5. else: count =1 
    // 6. now a for loop to iterate through the hashmap we created
        // 7. if statement to check if value %2 1= 0: return that character! (odd length so we will only have one man out)
// 8. outside of function call the function

// create the function and decide what params it needs and what it will return

function createPair(arr){
    var newHash = {}
    for (var i = 0; i < arr.length; i++){
        if (arr[i] in newHash){
            newHash[arr[i]]++;
        }
        else{
            newHash[arr[i]] = 1;
        }
        console.log(newHash)
    }
    for (var key in newHash){
        if (newHash[key] %2 != 0){
            return key;
        }
    }
}
console.log(createPair(nums2))






/* 
Odd Occurance Array:
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums5 = [1];
const expected5 = 1;

const nums6 = [5, 4, 5];
const expected6 = 4;

//             V
const nums7 = [5, 4, 3, 4, 3, 4, 5];
const expected7 = 4; // there is a pair of 4s but one 4 has no pair.

const nums8 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected8 = 1;

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// pseudocode here

// create the function and decide what params it needs and what it will return