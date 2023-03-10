// Work hard to get Arrays //

//What do we expect to get back? //
//How to swap variables //
// var fruit1 = "apples";
// var fruit2 = "oranges";
    
// fruit2 = fruit1;
    
// console.log(fruit2 + " and " + fruit1);


//What do we get back this time? //
// var fruit1 = "apples";
// var fruit2 = "oranges";
    
// var temp = fruit1; // temp is a common name for this
// fruit1 = fruit2;
// fruit2 = temp;
    
// console.log(fruit2 + " and " + fruit1);


//While Loops //
// var start = 0;
// var end = 12;
    
// while(start < end) {
//     console.log("start: " + start + ", end: " + end);
//     start += 2;
//     end -= 2;
// }

//Reversing an array //
//write a function reverse(arr) to reverse an array, if we were given....... ["a", "b", "c", "d", "e"]; //

var arr = ["a", "b", "c", "d", "e"];

function reverseArray(arr){
    var temp;
    for(let index=0; index <arr.length/2; index++){
        temp= arr[index];
        arr[index] = arr[arr.length-index-1];
        arr[arr.length-index-1] = temp
    }
    return arr
}

console.log(reverseArray(["a", "b", "c", "d", "e"]))