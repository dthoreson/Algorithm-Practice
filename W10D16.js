/* 
    Recursive Sigma
    Input: integer
    Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (5+4+3+2+1)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (2+1)

const num3 = -1;
const expected3 = 0;


// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:
// CREATE A FUNCTION THAT TAKES IN AN INTEGER
// CREATE A SUM VARIABLE TO HOLD THE TOTAL SUM (WILL START AT ZERO - WHAT WE NEED TO RETURN)
// IF STATEMENT FOR BASE CASE TO ONLY RUN IF INTEGER IS GREATER THAN 0
    //SUM EQUALS SUM PLUS INTEGER
    //RETURN CALL THE FUNCTION AGAIN BUT WE NEED TO DECREMENT INTEGER VALUE WITHIN THE CALL
// RETURN SUM
// CALL FUNCTION OUTSIDE OF FUNCTION

// create the function and decide what params it needs and what it will return
function recursiveSigma(num, sum=0){
    num=Math.floor(num);
    if(num > 0){
        console.log(sum);
        sum += num;
        return recursiveSigma(num-1, sum);
    }
    return sum
}
console.log(recursiveSigma(num1));
// console.log(recursiveSigma(num2));
// console.log(recursiveSigma(num3));
// console.log(recursiveSigma(10));
