function pyramid(char, height) {
    var chars = "";
    var spaces = "";
    var line = "";
    var rslt = "";
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < height - i; j++) {
            spaces += " ";
        }
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

