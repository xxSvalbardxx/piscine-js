function letterSpaceNumber(str) {
    let array = [];
    let regex = new RegExp("[a-zA-Z]+[ ]+[0-9]");
    if (regex.test(str)) {
        array.push(str);
    } else {
        array.push("No match");
    }
    console.log(array);

} 
letterSpaceNumber("a 1");