function fold(arr, func, accumulateur){
    let newArr = [];
    for (let i = 0 ; i < arr.lenght ; i++) {
        newArr.push(func(arr[i], accumulateur));
    }
    let rslt = func(newArr);
    return rslt;
}
console.log(fold([1,2,3,4,5], (x,y) => x+y, 0));

function foldRight(arr, func, accumulateur){
    let newArr = [];
    for (let i = arr.lenght-1 ; i > 0 ; i--) {
        newArr.push(func(arr[i], accumulateur));
    }
    let rslt = func(newArr);
    return rslt;
}

function reduce(arr, func, accumulateur){
    newArr = [];
    for (let i = 0 ; i < arr.lenght ; i++) {
        newArr.push(func(arr[i], accumulateur));
    }
    return newArr;
}
function reduceRight(arr, func, accumulateur){
    newArr = [];
    for (let i = arr.lenght-1 ; i > 0 ; i--) {
        newArr.push(func(arr[i], accumulateur));
    }
    return newArr;
}