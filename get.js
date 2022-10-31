
function get(src, path) {
    let array = path.split(".");
    let value = src;
    for (let i = 0; i < array.length; i++) {
        value = value[array[i]];
    }
    if (value === undefined) {
        return src;
    }else {
    return value;
    }
}
