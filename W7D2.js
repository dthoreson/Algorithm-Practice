// String: Reverse
//     Given a string,
//     return a new string that is the given string reversed
//

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:
// 1. create a function that can take in a string
// 2. create an emtpy string variable to hold newstring
// 3. start the loop starting from the end and ending at the begging of the string provided
    // 4. add each character into the newstring variable
// 5. Return newString outside of loop
// 6. outside of the function console.log the function call and include the arguments




function reverseString(str) {
    var newString= "";
    for (var i = str.length-1; i >= 0; i-- ) {
        newString+= str[i]
    }
    return newString
}
console.log(reverseString(str1))
console.log(reverseString(str2))
console.log(reverseString(str3))
console.log(reverseString(str4))








// Acronyms
//     Create a function that, given a string, returns the string’s acronym 
//     (first letter of each word capitalized). 
//     Do it with .split first if you need to, then try to do it without
// 

const strA = "object oriented programming";
const expectedA = "OOP";

// The 4 pillars of OOP
const strB = "abstraction polymorphism inheritance encapsulation";
const expectedB = "APIE";

const strC = "software development life cycle";
const expectedC = "SDLC";

// // Bonus: ignore extra spaces
// const strD = "  global   information tracker    ";
// const expectedD = "GIT";

// take 5-8 mins to write the pseudocode here:
// 1. create a function that can take in a string
// 2. create an emtpy string variable to hold newstring
// 3. create a temp variable to hold the str[i] that we will add into the newstring variable (will have this first equal to str[0])
// 4. set newString variable += to temp value at str[i] to start us off with the first character ready to go
// 5. start the for loop to iterate through the string
    // 6. another if statement for when str[i] == " " blank character:
        // 7. temp = str[i+1]
        //8. add this temp value to newString 
// 8. Need to perform the built in function toUpperCase() to capitalize all the collected characters in newstring and set it equal to newString variable
// 9. Return newString outside of both loops
// 10. outside of the function console.log the function call and include the arguments


// create the function and decide what params it needs and what it will return

function acronym_string(str){
    newString = ""
    temp = str[0]
    newString += temp
    for(var i = 0; i<str.length;i++){
        if(str[i]== " "){
            temp = str[i+1]
            newString += temp
        }
    }
    newString = newString.toUpperCase()
    return newString
}

console.log(acronym_string(strA))
console.log(acronym_string(strB))
console.log(acronym_string(strC))
console.log(acronym_string("bank of america"))