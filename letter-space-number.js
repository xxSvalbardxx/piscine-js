function letterSpaceNumber(str){
    
    const regex = /[a-zA-Z]\s\d\b/g
    const rslt = str.match(regex)
    return rslt
    
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