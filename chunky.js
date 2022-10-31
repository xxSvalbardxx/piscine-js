function chunk( array , size ) {
    let arrayOfArrays = [];
    while (array.length > 0) {
        let arrayElement = array.splice(0, size);
        arrayOfArrays.push(arrayElement);
    }
    return arrayOfArrays;
}
