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
    return {...arr};
  }
};
const strToObj = (str) => {
  if (typeof str === "string") {
    return JSON.parse(JSON.stringify(str));
  }
};
const superTypeOf = (data) => {
  if (data instanceof Array) {
    return "array";
  } else if (data instanceof Set) {
    return "set";
  } else if (typeof data === "string") {
    return "string";
  } else if (
    typeof data === "object" &&
    !Array.isArray(data) &&
    data !== null
  ) {
    return "object";
  } else if (data instanceof Map) {
    return "map";
  } else {
    return "unknown";
  }
};
