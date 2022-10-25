const arrToSet = (arr) => {
  if (arr instanceof Array) {
    return new Set(arr);
  }
};
const arrToStr = (arr) => {
  if (arr instanceof Array) {
    return arr.join("");
  }
};
const setToArr = (set) => {
  if (set instanceof Set) {
    return Array.from(set);
  }
};
const setToStr = (set) => {
  if (set instanceof Set) {
    return Array.from(set).join("");
  }
};
const strToArr = (str) => {
  if (typeof str === "string") {
    return str.split("");
  }
};
const strToSet = (str) => {
  if (typeof str === "string") {
    return new Set(str.split(""));
  }
};
const mapToObj = (map) => {
  if (map instanceof Map) {
    return Object.fromEntries(map);
  }
};
const objToArr = (obj) => {
  if (typeof obj === "object" && !Array.isArray(obj) && obj !== null) {
    return Object.values(obj);
  }
};
const objToMap = (obj) => {
  if (typeof obj === "object" && !Array.isArray(obj) && obj !== null) {
    return new Map(Object.entries(obj));
  }
};
const arrToObj = (arr) => {
  if (arr instanceof Array) {
    return { ...arr };
  }
};
const strToObj = (str) => {
  if (typeof str === "string") {
    let arr = strToArr(str);
    let obj = arrToObj(arr);
    return obj;
  }
};
const superTypeOf = (data) => {

if (data instanceof Map) {
    return "Map";
} else if (data instanceof Set) {
    return "Set";
} else if ( typeof data === "object" && !Array.isArray(data) && data !== null) {
    return "Object";
} else if (typeof data === "string") {
    return "String";
} else if (typeof data === "number" && !isNaN(data)) {
    return "Number";
} else if (typeof data === "number" && isNaN(data)) {
    return "Number";
} else if (data instanceof Array) {
    return "Array";
} else if ( data === null) {
    return "null";
} else if (typeof data === "undefined") {
    return "undefined";  
} else if (typeof data === "function") {
    return "Function";
}
};
