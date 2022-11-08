function invert(obj) {
    var inverted = {};
    for (var key in obj) {
        inverted[obj[key]] = key;
    }
    return inverted;
}