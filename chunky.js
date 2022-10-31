function splitArray( array , size ) {
    let arrayOfArrays = [];
    while (array.length > 0) {
        let arrayElement = array.splice(0, size);
        arrayOfArrays.push(arrayElement);
    }
    return arrayOfArrays;
}
console.log(splitArray([1,2,3,4,5,6,7,8,9,10]));