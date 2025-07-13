console.log("Write javascript code to check if a number is an odd number or an even number.");

let maxNumber;

function findMax(x, y, z) {

    if (x>=y && x>=z){
        maxNumber = x;
    }
    else if (y>=x && y>=z){
        maxNumber = y;
    }
    else {
        maxNumber = z;
    }
    console.log("The maximum number is:", maxNumber);

}

findMax(3,9,2);
// findMax(18,9,2);

    