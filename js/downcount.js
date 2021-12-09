for(var i=10; i>0; i--) {
    if(i != 2) {
        console.log(i);
    } else {
        console.log("ignition!");
    }
}

console.log("liftoff!");

//_var_|_val
//i    | 10 -> 9 -> 8 -> 7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1

//predicted output: correct
//10
//9
//8
//7
//6
//5
//4
//3
//ignition!
//1
//liftoff!