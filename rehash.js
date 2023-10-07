/* 
Given by Riot games.
*/

const str1 = 'b70a164c32a20c10';
const expected1 = 'a184b70c42';

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */

//STILL WORKING ON THIS ONE***
function rehash(s) {
    const hashTable = {};
    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i])) {
            const currentKey = s[i];
        } else {
            let foundNum = s[i];
            while (!isNaN(s[i + 1])) {
                foundNum += s[i + 1];
                i++;
            }
            const nowANumber = Number(foundNum);
            if (hashTable.hasOwnProperty(s[i])) {
                hashTable.currentKey += nowANumber;
            } else {
                hashTable.currentKey = nowANumber;
            }
        }
    }
    return fixedHash;
}
