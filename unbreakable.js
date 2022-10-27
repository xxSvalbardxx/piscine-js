const split = (str, delim) => {
   
    newDelim = delim;
    let arr = [];
    let word = "";
    console.log(str)
    
    str = str.replaceAll(delim, " ");

    console.log(str)

    delim = " ";
    for (let i = 0; i < str.length; i++) {
       
        if (str[i] != delim) {
            word += str[i];
        } else {        
            arr.push(word);
            word = "";
        }
    }
    arr.push(word);
    if (newDelim == "") {
        arr.shift();
        arr.pop();
    }
    return arr;
}
console.log(split('ee,ff,g,', ','));
console.log(split('Riad', ''));

const join = (arr, concatStr) => {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
        if (i !== arr.length - 1) {
            str += concatStr;
        }
    }
    return str;
}

// const same as split but work with multiple characters as delimiter


