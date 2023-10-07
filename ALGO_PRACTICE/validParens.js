// AUG 17 2023 - ALGOS - VALID PARENTHESIS

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

//An input string is valid if:

//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.
//Every close bracket has a corresponding open bracket of the same type.


//Example 1:

//Input: s = "()"
//Output: true
//Example 2:

//Input: s = "()[]{}"
//Output: true
//Example 3:

//Input: s = "(]"
//Output: false


//Constraints:

//1 <= s.length <= 104
//s consists of parentheses only '()[]{}'.


//--------------------------------------------------------------------------------------


var isValid = function (s) {
    if (s[0] === "]" | "}" | "}") {
        return false
    }
    var c = 0;
    var b = 0;
    var p = 0;
    for (i = 0; i < s.length; i + 2) {
        if (s[i] === "{" && s[i+1] === "}"){
            continue
        }
        if (s[i] === "[" && s[i+1] === "]"){
            continue
        }
        if (s[i] === "(" && s[i+1] === ")"){
            continue
        }
    }
};

// console.log(isValid("(){}[]"));
// console.log(isValid(")[]"));
console.log(isValid("{}]["));