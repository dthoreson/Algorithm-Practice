/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer,
  and rotates the characters in the string to the right by that given
  integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";
/*
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

// Hello World

// 1. Driver 🚗 Danielle
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:
// 1. create a function that takes in a str and int(seperator)
// 2. create a newStr variable that will hold the seperated string
// 3. edge case for int- create if statement for if int(seperator) is greater than str.length
    // 4. take int(seperator) - str.length 
    // 5. set that equal to int to use in loop
// 6. split given str variable into an array 
// 6. start the for loop here to iterate through the str
    // 7. pop last str[i] and append it to the newStr variable

// 8. console.log the newStr to do a check
// 9. return newStr variable
// 10. function call

// create the function and decide what params it needs and what it will return

function rotate(str,seperator){
    var newStr = ""
    if(seperator > str.length){
        seperator = seperator - str.length
    }
    newArr = str.split('')
    for(var i=0; i<newArr.length;i++){

    }
}
