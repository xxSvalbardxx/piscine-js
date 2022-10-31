function triangle(char , height) {
    var line = "";
    for (var i = 0; i < height; i++) {
        line += char;
        if (i < height - 1) {
            line += '\n';
        }
        return line;
    }
}
