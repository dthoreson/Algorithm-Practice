//DIAGONAL DIFFERENCE - W12D26

/* 
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const expected1 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
absolute difference = 0
*/

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */

/*
CREATE A FUNCTION THAT TAKES IN A MATRIX OF ARRAYS (2D ARRAY OF ARRAYS)
CREATE 2 VARIABLES: LEFT THAT TAKES IN 0 INDEX AND RIGHT THAT TAKES THE LAST INDEX
CREATE ANOTHER VARIABLE THAT KEEPS TRACK OF THE "ROW" THAT WE ARE ON (= AMOUNT OF ROWS)
WHILE LOOP TO RUN WHILE ROW VARIABLE IS <= MATRIX.LENGTH
    ADD NUMBER THAT WE GET FROM COUNTER -1 INDEX TO LEFT SUM 
    ADD NUMBER FROM MATRIX.LENGTH - (1+COUNT) TO RIGHT SUM 
    COUNT ++
RETURN MATH.ABS(LEFT-RIGHT)
*/
function diagonalDifference(sqrMatrix) { 
    let left = 0;
    let right = sqrMatrix[0].length;
    let counter = 0;
    let leftsum = 0;
    let rightsum = 0;
    
    while(counter <= sqrMatrix.length){
        pass
    }
}