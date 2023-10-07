/* 
    Parens Valid
    Given an str that has parenthesis in it
    return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.
//             v

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.
//                v
const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

// RIOT

// 1. Driver 🚗 Patrick
// 2. Presenter 👩‍💻 Laith/Danielle
// 3. Navigator 🧭 Laith/Danielle

// take 5-8 mins to write the pseudocode here:

//CREATE A FUNCTION THAT TAKES IN A STR
//CREATE A COUNTER VAR TO KEEP COUNT OF COUNT
//CREATE FOR LOOP TO ITERATE THROUGH STR
    //IF CHARACTER IS ')' AND COUNT IS 0
        //RETURN FALSE IMMEDIATELY AS EDGE CASE
    //ELSE IF CHARACTER IS '('
        //INCREASE COUNT BY 1
    //ELSE IF CHARACTER IS ')'
        //DECREASE COUNT BY 1
//IF COUNT ENDS AS 0
    //RETURN TRUE
//ELSE
    //RETURN FALSE
//OUTSIDE OF FUNCTION CALL THE FUNCTION


//build your code here:

function checker(str){
    var paraChecker = 0 
    for(var i=0;i<str.length;i++){ //for loop starts here
        if (str[i] == "("){ //edge case to check if we start with ); immediate false return
            paraChecker++
        }
        else if (str[i] == ")"){ //if ) we sub from count var
            paraChecker--
            if(paraChecker < 0){ //if count var dips below 0 after running if check then return false bc its a premature )
                return false
            }
        }
    }
    if (paraChecker > 0){ //if count var goes over 0 (end check) that means there are more ( so return false
        return false
    }
    else{
        return true //else return true (wouldnt make it to be negative val at this point bc of our earlier edge case in else if stmt)
    } 
}


console.log(checker(str1)+"\n")
console.log(checker(str2)+"\n")
console.log(checker(str3)+"\n")
console.log(checker(str4)+"\n")