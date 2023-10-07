// Always Sunny - W1D3//
var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit //
var isRaining = false;
var whatToBring = "I should bring: ";

if(isSunny) { //saying if isSunny is TRUE, which it is so we continue.. //
    whatToBring += "sunglasses, ";
}
if(temperature < 50) {
    whatToBring += "a coat, ";
}
if(isRaining) { //we wouldnt do this one since isRaining = False, so this is NOT true //
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);


//Prepare for downcount -W1D3//
for (var i = 10; i > 0; i--) {
    if (i != 2) {
        console.log(i);
    } else {
        console.log("ignition!");
    }
}

console.log("liftoff!");


//Count positives -W1D3//
var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
for (var x=0; x<numbers.length; x++){
    if( numbers[x] >= 0){
        countPositives++;
    }
}
    
console.log("there are " + countPositives + " positive values");
