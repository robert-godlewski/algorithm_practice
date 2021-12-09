var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {
    whatToBring += "sunglasses, ";
}

if(temperature < 50) {
    whatToBring += "a coat, ";
}

if(isRaining) {
    whatToBring += "an umbrella, ";
}

whatToBring += "and a smile!";
    
console.log(whatToBring);

//____var_____|_val
//isSunny     | true
//temperature | 45
//isRaining   | false
//whatToBring | "I should bring: " -> I should bring: sunglasses, a coat, and a smile!

//predicted output
//I should bring: sunglasses, a coat, and a smile!