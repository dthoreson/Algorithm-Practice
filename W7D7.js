/* 
Given a string,
return a new string with the duplicates excluded
  //Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

// RIOT

// 1. Driver 🚗Patrick
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// pseudocode here
//1. create function that takes in a string
//2. create newString variable to return
//3. create hashmap variable
//3. for loop to iterate
    //4. 

// create the function and decide what params it needs and what it will return

function deDupe(str){
var newString=""
var hash = {}
if (typeof str !== 'string') {
    return("Input must be a string");
}
for (var i = 0;i<str.length;i++){
    if ( str[i] in hash){
        hash[str[i]]++;
    }
    else{
        hash[str[i]] = 1;
    }
}
for(var key in hash){
    newString += key;
}
return newString;
}
// console.log(deDupe(str1));
// console.log(deDupe(str2));
// console.log(deDupe(str3));
// console.log(deDupe(str4));
console.log(deDupe(8));