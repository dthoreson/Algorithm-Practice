//MEASURE WATER LEVELS - W12D27 

/**
 * From a Chipotle interview.
 * encodeStr algo was also given in this interview (aaabbcdd => a3b2cd2).
 *
 * It ain't much, but it's honest work. A worker who measures water level fluctuations in a river is asked to find the
 * largest fluctuation in water levels during a day, but only for rises in water levels.
 */

const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15

const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20

const riverLevels3 = [15, 17, 30, 20, 50, 16, 25, 9, 3];
const expected3 = 30; // 50 - 20 = 30

const riverLevels4 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected4 = 11; // 12 - 1 = 11

const riverLevels5 = [1, 5];
const expected5 = 4;

const riverLevels6 = [5, 1];
const expected6 = -1;

const riverLevels7 = [9, 7, 7, 7];
const expected7 = -1;

const riverLevels8 = [42];
const expected8 = -1;

/**
 * It ain't much, but it's honest work. A worker who measures water level fluctuations in a river is asked to find the
 * largest fluctuation in water levels during a day, but only for rises in water levels.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} waterLevels Non-empty .
 * @returns {number} The max water-level rise amount or -1 if none.
 */
/*
create a function that takes in an array
create a variable to hold onto the sum we will return based on the highest rise
create a variable for highestrise to compare which is the highest one
iterate through array to see if it goes up or down
make an if check if i+1 -1 is less than or greater than 0 
rise += the i+1 -1
if rise is bigger than highest rise
then set highest to rise
else the next number is smaller reset the rise to 0
*/
function measureWaterLevels(waterLevels) {
    let rise = 0;
    let highestRise = 0;
    for(let i = 0; i < waterLevels.length; i++) { // this iterates us through the array provided
        if(waterLevels[i+1] - waterLevels[i] >= 0){ //this is checking to see if the water is rising 
            rise += waterLevels[i+1] - waterLevels[i]; //if so add the difference to the rise amount
            if(rise > highestRise){ // if rise is bigger then 
                highestRise = rise; // make rise the highestrise value
            } 
        }else {
            rise = 0; // this will reset rise to 0
        }
    }
    if(highestRise === 0){ // if there is no rise we will set to -1
        return -1;
    }
    return highestRise; // goal is to return highestRise found
}
console.log(measureWaterLevels(riverLevels1));
console.log(measureWaterLevels(riverLevels2));
console.log(measureWaterLevels(riverLevels3));
console.log(measureWaterLevels(riverLevels4));
console.log(measureWaterLevels(riverLevels5));
console.log(measureWaterLevels(riverLevels6));
console.log(measureWaterLevels(riverLevels7));
console.log(measureWaterLevels(riverLevels8));