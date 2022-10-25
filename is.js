const is = {
    num : (x) => typeof x === 'number' ? true : false, 
    nan : (x) => typeof x === 'NaN' ? true : false,
    str : (x) => typeof x === 'string' ? true : false,
    bool : (x) => typeof x === 'boolean' ? true : false,
    undef : (x) => typeof x === 'undefined' ? true : false,
    def : (x) => typeof x !== 'undefined' ? true : false,
    arr : (x) => typeof x === 'array' ? true : false,
    obj : (x) => typeof x === 'object' ? true : false,
    fun : (x) => typeof x === 'function' ? true : false,
    truthy : (x) => x ? true : false,
    falsy : (x) => !x ? true : false,
}
