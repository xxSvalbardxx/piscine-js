function triangle(char , height) {
    var line = "";
    var rslt = "";
    for (var i = 0; i < height; i++) {
        
        line += char;
        if (i < height - 1) {
            rslt += line + "\n";
        }else{
        rslt += line 
        }        
    }
    
    return rslt;
}
