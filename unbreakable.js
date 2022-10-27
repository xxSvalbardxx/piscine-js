const split = (str, delim) => {
    let arr = [];
    let word = "";
    str = str.replaceAll(delim, " ");
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== delim) {
            word += str[i];
        } else {
            arr.push(word + ", ");
            word = "";
        }
    }
    arr.push(word);
    return arr;
}

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


console.log(split('ggg - ddd - b', ' - '));
