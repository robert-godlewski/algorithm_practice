function getTotal(arrayOfNumbers) {
    var sum = arrayOfNumbers[0];

    for(var i=0; i<arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
        console.log("the current sum is: " + sum); 
    }

    console.log("the total is: " + sum);
}

getTotal([1, 3, 5]);

//____________var_______|_val
//sum                   | 1 -> 2 -> 5 -> 10
//i                     | 0 -> 1 -> 2 -> 3
//arrayOfNumbers.length | 3

//Predicted output: All correct
//the current sum is: 2
//the current sum is: 5
//the current sum is: 10
//the total is: 10