var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
    
// your code here!
for(i=0; i<numbers.length; i++) {
    if (numbers[i] > 0) {
        countPositives++;
    }
}

console.log("there are " + countPositives + " positive values");

//______var______|_val
//countPositives | 0 -> 1 -> 2 -> 3 -> 4
//numbers        | [3, 4, -2, 7, 16, -8, 0]
//i              | 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6

//predicted output:
//there are 4 positive values