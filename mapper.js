function map(arr, func){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i]));
    }
    return newArr;
}

// flatMap must not use map or flat or flatMap 
function flatMap(arr, func){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr = newArr.concat(func(arr[i]));
    }
    return newArr;
}