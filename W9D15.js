/* 
    Given an int to represent how much change is needed
    calculate the fewest number of coins needed to create that change,
    using the standard US denominations
    quarter: 25c
    dime: 10c
    nickel: 5c
    penny: 1c
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 51;
const expected2 = { quarter: 2, penny: 1 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

// RIOT

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:
// CREATE A FUNCTION THAT TAKES IN A NUMBER (CENTS)
// CREATE AN EMPTY OBJECT TO RETURN AT THE END
// CREATE A VARIABLE TO CAPTURE FULL VALUE (FULLVALUE)
// TAKE THE NUMBER AND DIVIDE IT BY 25(QUARTER)AND FLOOR IT SO WE DONT GET THE REMAINDER AND SET EQUAL TO FULLVALUE
// DO A CHECK IF FULLVALUE IS NOT 0 
    // MAKE QUARTER A KEY IN THE EMPTY OBJECT WITH VALUE OF FULLVALUE
    // SET CENTS EQUAL TO CENTS MODULUS 25
// TAKE THE NUMBER AND DIVIDE IT BY 10(DIME)AND FLOOR IT SO WE DONT GET THE REMAINDER AND SET EQUAL TO FULLVALUE
// DO A CHECK IF FULLVALUE IS NOT 0 
    // MAKE QUARTER A KEY IN THE EMPTY OBJECT WITH VALUE OF FULLVALUE
    // SET CENTS EQUAL TO CENTS MODULUS 10
// TAKE THE NUMBER AND DIVIDE IT BY 5(NICKEL)AND FLOOR IT SO WE DONT GET THE REMAINDER AND SET EQUAL TO FULLVALUE
// DO A CHECK IF FULLVALUE IS NOT 0 
    // MAKE QUARTER A KEY IN THE EMPTY OBJECT WITH VALUE OF FULLVALUE
    // SET CENTS EQUAL TO CENTS MODULUS 5
// TAKE THE NUMBER AND DIVIDE IT BY 1(PENNY)AND FLOOR IT SO WE DONT GET THE REMAINDER AND SET EQUAL TO FULLVALUE
// DO A CHECK IF FULLVALUE IS NOT 0 
    // MAKE QUARTER A KEY IN THE EMPTY OBJECT WITH VALUE OF FULLVALUE
    // SET CENTS EQUAL TO CENTS MODULUS 1
// RETURN "EMPTY" OBJECT
//CALL THE FUNCTION OUTSIDE OF THE FUNCTION

// create the function and decide what params it needs and what it will return

function fewestCoinChange(cents){
    if(cents < 0){
        return("Sorry, you now owe ME!")
    }
    var walletHash = {};
    var fullValue = Math.floor(cents/25);
    if(fullValue != 0){
        walletHash["Quarter"] = fullValue;
        cents = cents%25;
    }
    fullValue = Math.floor(cents/10);
    if(fullValue != 0){
        walletHash["Dime"] = fullValue;
        cents = cents%10;
    }
    fullValue = Math.floor(cents/5);
    if(fullValue != 0){
        walletHash["Nickel"] = fullValue;
        cents = cents%5;
    }
    fullValue = Math.floor(cents/1);
    if(fullValue != 0){
        walletHash["Penny"] = fullValue;
        cents = cents%1;
    }
    return walletHash;
}

console.log(fewestCoinChange(cents1));
console.log(fewestCoinChange(cents2));
console.log(fewestCoinChange(cents3));
console.log(fewestCoinChange(cents4));
console.log(fewestCoinChange(0));
console.log(fewestCoinChange(-40));
