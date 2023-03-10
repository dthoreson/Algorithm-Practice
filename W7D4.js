/* 
Given in an alumni interview
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 

If final result is not shorter (such as "bb" => "b2" ),
return the original string.
  */


const str1 = "aaaabbcddd";
const expected1 = "a4b2cd3";
const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

  // RIOT   Read Input Output Talk

  // 1. Driver 🚗
  // 2. Presenter 👩‍💻
  // 3. Navigator 🧭

  // take 5-7 mins to write the pseudocode here:

/*
create function that takes in a string
make a counter that starts at 1 
make an empty  newstring that will hold arr[i] + counter
make a for loop to go through the string
    i as we are iterating checks arr[i] to see if equals the prior character
    counter ++
    if count is less than or equal to 1 wont push count 
        store in empty string arr[i] with the counter once arr[i] doesnt match
    if  not then counter would reset 
        continue 
if orignal.length is less than or equal to new string.length then set orignal string to result variable else retrun either new or orignal 
return  result 
call function
*/

// create the function and decide what params it needs and what it will return

function encode(string){
    var count = 1;
    var newString = ""
    for (var i = 0;i<string.length;i++){
        if (string[i] == string[i+1]){
            count++;
        }
        else {
            newString += string[i]; //pushes the value in the new string
            if (count > 1){
                newString += count
                count = 1;
            }
            }
        }
        if (string.length <= newString.length){
            console.log(string)
        }
        else{
        console.log(newString)
    }
}

encode(str1);
encode(str2);
encode(str3);
encode(str4);