function map(arr, func){
    let newMap = [];
    for (let i = 0; i < arr.length; i++){
        newMap.push(func(arr[i], i, arr)); // func(element, index, array)
    }
    return newMap;
}


// flatMap must not use map or flat or flatMap 
function flatMap(arr, func){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr = newArr.concat(func(arr[i], i, arr));
    }
    return newArr;
}