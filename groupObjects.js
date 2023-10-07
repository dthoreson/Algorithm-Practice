// W12D2.js
/* 
This was extracted from a react interview challenge. The items were to be
displayed in category groups.

Given an array of objects that contain a category key,
return a hash table to group the objects by their category.

Make the grouping case-insensitive.

Bonus: allow the key that is grouped by to be provided.
*/

const objects = [
    {
        name: 'Baby Yoda',
        category: 'cute',
    },
    {
        name: 'Cricket Protein',
        category: 'food',
    },
    {
        name: 'Shibe',
        category: 'Cute',
    },
    {
        name: 'Ancient India',
        category: 'Cradle of Civilization',
    },
    {
        name: 'Wasp Crackers',
        category: 'Food',
    },
    {
        name: 'The Fertile Crescent',
        category: 'Cradle of Civilization',
    },
];

const expected = {
    cute: [
        {
            name: 'Baby Yoda',
            category: 'cute',
        },
        {
            name: 'Shibe',
            category: 'Cute',
        },
    ],
    food: [
        {
            name: 'Cricket Protein',
            category: 'food',
        },
        {
            name: 'Wasp Crackers',
            category: 'Food',
        },
    ],
    'cradle of civilization': [
        {
            name: 'Ancient India',
            category: 'Cradle of Civilization',
        },
        {
            name: 'The Fertile Crescent',
            category: 'Cradle of Civilization',
        },
    ],
};

/**
 * Creates a hash table of case-insensitive categories mapped to the items
 * belonging to that category.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Object>} items
 * @param {string} items.category
 * @returns {Object<string, Array<Object>>} The hash category hash table with
 *    string keys and array of objects as values.
 */
function groupObjects(items) {
    //create an object variable to hold all of the category objects to return at end 
    const table = {}
    //iterate through object 
    for (let i = 0; i < items.length; i++) {
        //create variable to hold the category key name 
        const categoryKeyName = items[i]['category'].toLowerCase()
        //if statement to catch if our object doesnt already contain a key category
        if (!table.hasOwnProperty(categoryKeyName)) {
            //if not, we create a new key category and set it eqaul to an empty array so we can push the item
            table[categoryKeyName] = []
        }
        // use push array method in order to add item to the already initialized key category
        table[categoryKeyName].push(items[i])
    }
    return table
}
// console.log(groupObjects(objects));

//refactored code:

function groupObjects2(items) {
    const table = {}
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const categoryKeyName = item.category.toLowerCase();
        if (categoryKeyName in table === false) {
            table[categoryKeyName] = []
        }
        const categorizedObjects = table[categoryKeyName];
        categorizedObjects.push(item);
    }
    return table
}
console.log(groupObjects2(objects));