const slice = (arr, start = 0) => {
    
    let newArr = '';
    for (let i = start; i < arr.length; i++) {
        newArr += arr[i];
    }
    return newArr;
}
console.log(slice('abcdef', 2));
console.log(slice(['e','f','r','y','h'], 2));