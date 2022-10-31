// Create a function named get which takes two arguments:

// src: an object.
// path: a string representing a path.

// Your function will return the value at the given path in the src object.

function get(src, path) {
    let array = path.split(".");
    let value = src;
    for (let i = 0; i < array.length; i++) {
        value = value[array[i]];
    }
    return value;
}
console.log(get({a: {b: {c: "d"}}}, "a.b.c"));