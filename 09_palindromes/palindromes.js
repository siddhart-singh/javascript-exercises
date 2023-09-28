const palindromes = function (str) {
    let clearedStr = clearStr(str);
    for (let i = 0; i < clearedStr.length / 2; i++){
        if (clearedStr[i] != clearedStr[(clearedStr.length - 1) - i]){
            return false;
        }
    }
    return true;
};

function clearStr(str){
    let clearedStr = '';
    for (let char of str){
        if (isCharLetter(char)){
            clearedStr += char.toLowerCase();
        }
    }
   return clearedStr;
}

function isCharLetter(char){
    return /^[a-z0-9]$/i.test(char);
}

// Do not edit below this line
module.exports = palindromes;









