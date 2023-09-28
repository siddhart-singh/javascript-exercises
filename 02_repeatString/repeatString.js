const repeatString = function(word, time) {

    if (time < 0){
        return "ERROR";
    }
    let output = ''
    for (let i = 0; i < time; i++){
        output += word;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
