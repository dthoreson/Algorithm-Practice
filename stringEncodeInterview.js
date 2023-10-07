// WEEK 3 DAY 3 - Algos - String Encode 
// Given in an alumni interview in 2021.
// String Encode
// You are given a string that may contain sequences of consecutive characters.
// Create a function to shorten a string by including the character,
// then the number of times it appears. 

// If final result is not shorter(such as "bb" => "b2"),
// return the original string.
// * /


const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */


function encodeStr(str) {
    var count = 1
    var newString = ""
    var currentCharacter = "str[0]"

    for(i = 0; i < str.length; i++){
        if( str[i] == currentCharacter){
            count++;
        }
        else{
            currentCharacter = str[1];
            count = 1;
        }
    }
    return newString;
}


encodeStr(str1)