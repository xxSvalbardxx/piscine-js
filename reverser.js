const reverse = (str) => {
    let Arr = false;
    let rslt = "";
    let result = [];
    if (Array.isArray(str)) {
        Arr = true;
    }
    for (let i = str.length - 1; i >= 0; i--) {
        if (Arr) {
            result.push(str[i]);
        } else {
            rslt += str[i];
        }


    }
    if (Arr) {
        return result;
    }
    return rslt;
    
}
console.log(reverse("hello"));