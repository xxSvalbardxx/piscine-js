function longWords(words) {
    shortWords = 0;   
    words.map(function(word) {
        if (word.length < 5){
            shortWords+=1;
        }  
    });
    if (shortWords !== 0){
        return false
    }
    return true
}
function oneLongWord(words) {
    longWords = 0;
    words.map(function(word) {
        if (word.length >= 10){
            longWords+=1;
        }  
    });
    if (longWords >= 1){
        return true
    }
    return false
}
function noLongWords(words) {
    longWords = 0;
    words.map(function(word) {
        if (word.length >= 7){
            longWords+=1;
        }  
    });
    if (longWords === 0){
        return true
    }
    return false
}
