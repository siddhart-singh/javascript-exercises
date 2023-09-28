const sumAll = function(num1, num2) {
    
    if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }

    if (Math.min(num1, num2) < 0){
        return "ERROR";
    }

    if (num1 > num2){
        [num1, num2] = [num2, num1];
    }

    let output = 0;

    for (let i = num1; num1 <= num2; num1++){
        output += num1;
    }
    return output;
};

// console.log(typeof(10))

// Do not edit below this line
module.exports = sumAll;
