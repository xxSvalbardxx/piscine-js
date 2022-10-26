const cutFirst = (str) => str.slice(2);
const cutLast = (str) => str.slice(0,-2);
const cutFirstLast = (str) => str.slice(2, -2);
const keepFirst = (str) => str.slice(0, 2);
const keepLast = (str) => str.slice(-2, str.length);
const keepFirstLast = (str) =>{
    if (str.length > 4) {
        str.slice(0, 2) + str.slice(-2, str.length);
    } else {
        return str;
    }
}; 

/*
const str = 'af';
console.log('cFirst  '+cutFirst(str));
console.log('cLast  '+cutLast(str));
console.log('cFL  '+cutFirstLast(str));
console.log('kF  '+keepFirst(str));
console.log('kL  '+keepLast(str));
console.log('kFL  '+keepFirstLast(str));
*/