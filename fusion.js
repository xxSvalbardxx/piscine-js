/*
The objective of this exercise is to merge objects into a new object depending on the values type.

Create a function named fusion that:
    For array types, you will concatenate them.
    For strings, you must concatenate them with a space.
    If they are numbers, you must add them.
    If it is an object, you must join them recursively.
    In case of type mismatch you must replace it with the value of the second object (if it exists).
*/
function superTypeOf(value) {
    if (value instanceof Array) {
        return 'array';
    }
    if (typeof value === 'string') {
        return 'string';
    }
    if (typeof value === 'number') {
        return 'number';
    }
    if (typeof value === 'object') {
        return 'object';
    }
    return 'unknown';


}

function fusion(obj1, obj2) {
    var result = {};
    var keys = Object.keys(obj1).concat(Object.keys(obj2));
    keys.forEach(function (key) {
        var value1 = obj1[key];
        var value2 = obj2[key];
        var type1 = superTypeOf(value1);
        var type2 = superTypeOf(value2);
        if (type1 === type2) {
            if (type2 === 'array') {
                result[key] = value1.concat(value2);
            } else if (type2 === 'string') {
                result[key] = value1 + ' ' + value2;
            } else if (type2 === 'number') {
                result[key] = value1 + value2;
            } else if (type2 === 'object') {
                result[key] = fusion(value1, value2); //
            } else {
                result[key] = value2;
            }
        } else {
            
            if (type1 === 'unknown') {
                result[key] = value2;
            }
            if (type2 === 'unknown') {
                result[key] = value1;
            }
            if (type1 !== 'unknown' && type2 !== 'unknown') {
                result[key] = value2;
            }
        }
    });
    
    return result;
}
/*
console.log(fusion({ arr: [1, "2"] }, { arr: [2] })); // -> { arr: [ 1, '2', 2 ] };
console.log('---------------------');
console.log(fusion({ arr: [], arr1: [5] },{ arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] })); // ->{ arr: [ 10, 3 ], arr1: [ 5, 15, 3 ], arr2: [ '7', '1' ] }
console.log("------------------------------------------------------------");
console.log(fusion({ str: "salem" }, { str: "alem" })); // -> { str: 'salem alem' };
console.log('---------------------');
console.log(fusion({ str: "salem" }, { str: "" })); // -> { str: 'salem ' });
console.log("------------------------------------------------------------");
console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }); // -> { a: 20, b: 10, c: 1 }
console.log("------------------------------------------------------------");
console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } })); // -> { a: 11, x: [], b: { c: 'Salem alem' } }
console.log('---------------------');
console.log(fusion( { a: { b: [3, 2], c: { d: 8 } } },{ a: { b: [0, 3, 1], c: { d: 3 } } }))); // -> { a: { b: [ 3, 2, 0, 3, 1 ], c: { d: 11 } } }
console.log("------------------------------------------------------------");
console.log(fusion({ a: "hello", b: [] }, { a: 4 })); // -> { a: 4, b: [] }
*/





/*
function fusion(obj1, obj2) {
    var result = {};
    var keys = Object.keys(obj1).concat(Object.keys(obj2)); // 
    keys.forEach(function (key) {
        var value1 = obj1[key];
        var value2 = obj2[key];
        var type1 = superTypeOf(value1);
        var type2 = superTypeOf(value2);
        if (type1 === type2) {
            if (type2 === 'array') {
                result[key] = value1.concat(value2);
            } else if (type2 === 'string') {
                result[key] = value1 + ' ' + value2;
            } else if (type2 === 'number') {
                result[key] = value1 + value2;
            } else if (type2 === 'object') {
                result[key] = fusion(value1, value2); //
            } else {
                result[key] = value2;
            }
        } else {
            
            if (type1 === 'unknown') {
                result[key] = value2;
            }
            if (type2 === 'unknown') {
                result[key] = value1;
            }
            if (type1 !== 'unknown' && type2 !== 'unknown') {
                result[key] = value2;
            }
        }
    });
    console.log(result);
    return result;
}
*/