function longWords(words, acc=0) {
    let shortWords = 0;   
    words.map(function(word) {
        if (word.length < 5){
            shortWords+=1;
        }  
    },acc);
    if (shortWords !== 0){
        return false
    }
    return true
}
function oneLongWord(words, acc=0) {
    let longWords = 0;
    words.map(function(word) {
        if (word.length >= 10){
            longWords+=1;
        }  
    },acc);
    if (longWords >= 1){
        return true
    }
    return false
}
function noLongWords(words, acc=0) {
    let longWords = 0;
    words.map(function(word) {
        if (word.length >= 7){
            longWords+=1;
        }  
    },acc);
    if (longWords === 0){
        return true
    }
    return false
}
