const is = {};
is.num = (x) => typeof x === 'number' ? true : false; 
is.nan = (x) => is.num(x) && isNaN(x) ? true : false;
is.str = (x) => typeof x === 'string' ? true : false;
is.bool = (x) => typeof x === 'boolean' ? true : false;
is.undef = (x) => typeof x === 'undefined' ? true : false;
is.def = (x) => typeof x !== 'undefined' ? true : false;
is.arr = (x) =>  x instanceof Array ? true : false;
is.obj = (x) =>  x instanceof Object ? true : false; // typeof x === 'object' && !Array.isArray(x) && x !== null
is.fun = (x) => typeof x === 'function' ? true : false;
is.truthy = (x) => x ? true : false;
is.falsy = (x) => !x ? true : false;