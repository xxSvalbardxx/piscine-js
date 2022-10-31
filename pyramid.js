function pyramid(char, height) {
    var chars = "";
    var spaces = "";
    var line = "";
    var rslt = "";
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < height - i; j++) {
            for (var k = 0; k < char.length; k++) {
                spaces += " ";
            }
        }
        
        spaces = spaces.slice(0, -(char.length));
        
        if (i > 0) {
            chars += char + char;
        }else{
            chars += char;
        }
        
        line = spaces + chars;

        if (i < height-1) {
            rslt += line + "\n";
        } else {
        rslt += line 
        }
        spaces = "";
        line = "";        
    }
    return rslt;
}

console.log(pyramid("AA", 5));