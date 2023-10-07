/* 
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionaries to represent current inventory,
  update the quantities of the current inventory
  
  if the item doesn't exist in current inventory, add it to the inventory
  return the current inventory after updating it.
*/

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
];
const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];

const expected1 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
];

const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
const expected2 = [{ name: "Peanut Butter", quantity: 20 }];

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];
const expected3 = [{ name: "Peanut Butter", quantity: 20 }];




// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:
// 1. create a function that takes in newInv(arr1) and currInv(arr2)
// 2. create a for loop to iterate through newInv arr[i]
    //3. create 2nd for loop to iterate through currInv arr[j] to compare it
        //4. if statement to see if arr[i]['name'] is in the arr[j]['name'] list
        //5. arr[i]['name'] += arr[j]['name'] (update the quantity)
        //6. can put a break here since no dupes in arr (optional)




// create the function and decide what params it needs and what it will return

function updateInventory(newInv, currInv){
    for (var i = 0; i < newInv.length; i++){
        console.log("This is what we get from newInv list:", i, newInv)
        for (var j = 0; j < currInv.length; i++){
            
        }
    }
}