var x = 5;
    
function addToX(amount) {
    return x + amount;
    console.log("hello there"); //This will not run because it's after the return!
}
    
console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);

//__var__|_val
//x      | 5
//result | addToX(-10) -> 5 +(-10) -> -5

//Predicted output: correct
//5
//-5
//5
