function longWords(words) {
    return words.every(word => word.length >= 5)
}
function oneLongWord(words) {
    return words.some(word => word.length >= 10)
}
function noLongWords(words) {
    return words.every(word => word.length < 7)
}
