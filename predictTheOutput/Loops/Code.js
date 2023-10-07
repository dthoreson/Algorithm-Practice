// PREDICT THE OUTPUT - W1D2//
var a = 25;
a = a - 13;
console.log(a / 2);

a = "hello";
console.log(a + " hello");

// PREDICT THE LOOPS - W1D2//
for (var i = 0; i < 10; i++) {
    console.log(i);
    i = i + 3;
}

console.log("outside of the loop " + i);

// LESSON 3- PREDICT WHAT THE CODE DOES - W1D2//
function getTotal(arrayOfNumbers) {

    var sum = arrayOfNumbers[0];

    for (var i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum);
    }

    console.log("the total is: " + sum);
}

getTotal([1, 3, 5]);

//Why does the above code say at the end that total is 10? Is this the answer you would expect? //
// - this is because sum+= arrayOfNumbers[i] section. It starts off already as arrayOfNumbers[0] = 1 so on the first round the 0 index is used twice to get us to 2. In order to avoid this, we must set sum = 0. //
