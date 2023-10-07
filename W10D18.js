/* 
    Return the fibonacci number at the nth position, recursively.
    
    Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
    The next number is found by adding up the two numbers before it,
    starting with 0 and 1 as the first two numbers of the sequence.
*/

const num1 = 0;
const expected1 = 0;

const num2 = 1;
const expected2 = 1;

const num3 = 2;
const expected3 = 1;

const num4 = 3;
const expected4 = 2;

const num5 = 4;
const expected5 = 3;

const num6 = 8;
const expected6 = 21;


// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:
// WRITE A FUNCTION THAT TAKES IN AN INTEGER AND OPTIONAL PARAM SUM=0
//


// create the function and decide what params it needs and what it will return
function fibanacci(int, hash={}){
    if (hash.hasOwnProperty(int)){
        return hash[int];
    }
    if(int == 0){
        return 0;
    }
    if(int == 1){
        return 1;
    }
    hash[int] = fibanacci(int-1, hash) + fibanacci(int-2, hash);
    return hash[int]
}

console.time("timer");
// console.log(fibanacci(num1));
// console.log(fibanacci(num2));
// console.log(fibanacci(num3));
// console.log(fibanacci(num4));
// console.log(fibanacci(num5));
console.log(fibanacci(num6));
console.timeEnd("timer");

