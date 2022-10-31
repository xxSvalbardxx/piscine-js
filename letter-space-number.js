function letterSpaceNumber(str){
    const arr = []
    const regexWord =   /[a-zA-Z]\s\d\b/g
    const res = str.match(regexWord)
    if(res){
        const res = [];
        return res
    }
}
//  \s matches any whitespace character (equal to [\r \t \n \f \v])
//  \d matches any digit (equal to [0-9])
//  \b matches a word boundary position (equal to [\b])


/*
function letterSpaceNumber(str) {
    let array = [];
    let regex = new RegExp("[a-zA-Z][ ][0-9]");
    let match = str.match(regex);
    if (match != null) {
        console.log(match);
    }
}
*/
letterSpaceNumber('He is 8 or 9 years old, not 10.');