//I want this to reverse the array
function reverse(arr) {
    var start = 0;
    var temp = null;
    while (start < arr.length/2) {
        var end = arr.length-1-start;
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
    }
    return arr;
}

arr = ["a","b","c","d","e"];
console.log("array at start: " + arr);
revarr = reverse(arr);
console.log("array after reversed: " + revarr);
