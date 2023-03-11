/* 
    String: Is Palindrome
    Create a function that returns a boolean whether the string is a strict palindrome. 
        - palindrome = string that is same forwards and backwards
    
    Do not ignore spaces, punctuation and capitalization
 */
// level
// racecar
// tacocat

const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;



// RIOT   Read Input Output Talk


// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-7 mins to write the pseudocode here:
//1. create a function that takes in a string
//2. create a new var for revString
//3. create for loop to iterate from end of string to the front
    //4. as we iterate backwards we add str[i] to revString
//4. if statement to check if revString == orginal string
    //5. if True, we will return True
//6. return False if they dont match


// create the function and decide what params it needs and what it will return

function isPanlindrome(str){
    var revString = ""
    for (var i = str.length-1; i>=0; i--){
        revString += str[i]
    }
    if (revString == str){
        return true
    }
    else{ 
        return false
    } 
}
console.log(isPanlindrome(str1))
console.log(isPanlindrome(str2))
console.log(isPanlindrome(str3))
console.log(isPanlindrome(str4))


/* 
    Zip Arrays into Map
    Given two arrays, create an associative array and return it (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
    Associative arrays are sometimes called maps because a key (string) maps to a value 
 */

const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
const expected5 = {
    abc: 42,
    3: "wassup",
    yo: true,
};

const keys2 = [];
const vals2 = [];
const expected6 = {};

const keys3 = ['name', 'number', 'type', 'evolves_from']
const vals3 = ['Gyarados', 130, 'water/flying', 'Magikarp']
const expected7 = {
    name: 'Gyarados',
    number: 130,
    type: 'water/flying',
    evolves_from: 'Magikarp'
}

// RIOT   Read Input Output Talk


// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-7 mins to write the pseudocode here:
// 1. take in a function that takes in two arrays
// 2. create an empty dictionary variable that we can return
// 3. create a for loop to iterate through keys1 
    //4. since the indexes match, we set dict[keys[i]] = vals[i]
//5. return dict outstide of loop
//6. outside of function console log the function call with the arguments we want to take in


// create the function and decide what params it needs and what it will return

function zipArray(arr1, arr2){
    newDict = {}
    for(var i =0; i<arr1.length; i++){
        newDict[arr1[i]] = arr2[i]
    }
    return newDict
}

console.log(zipArray(keys1, vals1))
console.log(zipArray(keys2, vals2))
console.log(zipArray(keys3, vals3))
