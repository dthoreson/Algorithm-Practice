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
// 4. add each character into the newstring var
// 5. 




function reverseString(str) {
    var newString= "";
    for (var i = str.length-1; i >= 0; i-- ) {
        newString+= str[i]
    }
    console.log(newString);
}
reverseString(str3)








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

// create the function and decide what params it needs and what it will return