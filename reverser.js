const reverse = (str) => {
    Arr = false;
    if (Array.isArray(str)) {
        Arr = true;
    }
    for (let i = str.length - 1; i >= 0; i--) {
        if (Arr) {
            str.push(str[i]);
        } else {
            str += str[i];
        }

    }
    return str;
}