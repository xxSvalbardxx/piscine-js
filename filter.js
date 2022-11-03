function filter(arr, func){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(func(arr[i], i, arr)){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function reject(arr, func){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(!func(arr[i], i, arr)){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function partition(arr, func){
    let newArr = [[],[]];
    for (let i = 0; i < arr.length; i++) {
        if(func(arr[i], i, arr)){
            newArr[0].push(arr[i]);
        } else {
            newArr[1].push(arr[i]);
        }
    }
    return newArr;
}