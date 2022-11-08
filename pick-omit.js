// pick: return an object contains only those keys which appear in the string or array of strings.
function pick(obj, str) {
  if (typeof str == "string") {
    str = [str];
  }
  let obj2 = {};
  let keys = Object.keys(obj);

  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    keys.forEach((key) => {
      if (str[i] == key) {
        obj2[key] = obj[key];
      }
    });
  }
  return obj2;
}

// omit: return an object contains only those keys which do not appear in the string or array of strings.
function omit(obj, str) {
  if (typeof str == "string") {
    str = [str];
  }
  let obj2 = { ...obj };
  for (key of keys) {
    delete obj2[key];
  }
  return obj2;
}

/*
console.log(pick({ age: 1, agehg: 2, c: 3 }, ["ff","agehg"])); // {a:1}
console.log(omit({ a: 1, aa: 2, c: 3 }, ["a"])); // {b:2}
*/
