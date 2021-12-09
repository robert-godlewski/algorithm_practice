for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}
    
console.log("outside of the loop " + i);

//var_|_val
//i   | 0 -> 3 -> 6 -> 9 -> 12

//Predicted Output
//0 (Correct)
//3 (incorrect)
//6 (incorrect)
//9 (absolutle incorrect)
//outside of the loop 12 (correct except happens 1 line before)

//Actual Answer
//0
//4 (added 1 on top because of the i++ automatically updates the number)
//8
//outside of the loop 12