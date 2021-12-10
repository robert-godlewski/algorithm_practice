function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            //arr[0] != arr[5] -> 3 != 3 -> false
            //arr[1] != arr[4] -> 2 != 2 -> false
            //arr[2] != arr[3] -> 1 != 1 -> false
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);

//master:
//___var__|_val
//result1 | isPal( [1, 1, 2, 2, 1] ) -> "Nor a pal-indrome!"
//result2 | isPal( [3, 2, 1, 1, 2, 3] ) -> "Pal-indrome!"

//isPal( [1, 1, 2, 2, 1] )
//_____var_____|_val
//arr          | [1, 1, 2, 2, 1]
//left         | 0 -> 1
//arr.length/2 | 5/2=2
//right        | 5-1-0=4 -> 4-1=3

//isPal( [3, 2, 1, 1, 2, 3] )
//_____var_____|_val
//arr          | [3, 2, 1, 1, 2, 3]
//left         | 0 -> 1 -> 2 -> 3
//arr.length/2 | 6/2=3
//right        | 6-1-0=5 -> 6-1-1=4 -> 6-1-2=3

//Predicted output: correct
//"Nor a pal-indrome!"
//"Pal-indrome!"