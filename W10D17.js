/* FACTORIAL
/* 
    Recursive Factorial
    Input: integer
    Output: integer, product of ints from 1 up to given integer
    
    If less than zero, treat as zero.
    Bonus: If not integer, truncate (remove decimals).
    
    Experts tell us 0! is 1.
    
    rFact(3) = 6 (1*2*3)
    rFact(6.8) = 720 (1*2*3*4*5*6)
*/

const num1 = 3;
const expected1 = 6;
// Explanation: 1*2*3 = 6

const num2 = 6.8;
const expected2 = 720;
// Explanation: 1*2*3*4*5*6 = 720

const num3 = 0;
const expected3 = 1;


// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:
// CREATE A FUNCTION THAT TAKES IN A NUMBER
// CREATE A VARIABLE "PRODUCT" TO TAKE IN THE FACTORIAL VALUE AND RETURN AT THE END
    // IF GIVEN A 0 OR 1
        // QUICK EXIT AND RETURN 1 AS THE PRODUCT
    // NEED A BASE IN A IF STATEMENT TO RUN ONLY IF INTEGER GIVEN IS GREATER THAN 0
        // RETURN CALL THE FUNCTION BUT WITHIN PARAMETERS DEDUCT 1 FROM INT TO WORK ITS WAY DOWN TO ITS OWN EXIT
// RETURN PRODUCT VARIABLE
// OUTSIDE OF FUNCTION CALL THE FUNCTION

// create the function and decide what params it needs and what it will return
function factorial(num, product=1){
    num=Math.floor(num);
    if(num == 0){
        return 1;
    }
    if(num > 1){
        // console.log(product);
        product = product * num;
        num--;
        return factorial(num, product);
    }
    return product;
}
console.log(factorial(num1));
console.log(factorial(num2));
console.log(factorial(num3));



/* SumArr
/* 
    Recursively sum an arr of ints
*/

const nums4 = [1, 2, 3];
const expected4 = 6;

const nums5 = [1];
const expected5 = 1;

const nums6 = [];
const expected6 = 0;


// function sumArr(nums, x) {
//     for(var i = 0; i < nums.length; i++){
//         if(i)
//     }
