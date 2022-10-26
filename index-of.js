const indexOf = (arr, value, index = 0) => {
    
    // ((index === undefined) || (index <= 0)) ? index = 0 : index = index;
        for (let i = index; i < arr.length; i++) {
            if (arr[i] === value) {
                return i;
            }
        }
        return -1;

};

const lastIndexOf = (arr, value, index = arr.length) => {
    for (let i = index; i >= 0; i--) {
        if (arr[i] === value) {
        return i;
        }
    }
    return -1;
};
const includes = (arr, value) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
        return true;
        }
    }
    return false;
};
console.log(lastIndexOf(['t', 0, 0, 't'], 't' , 2));
console.log(lastIndexOf([2, 4, 2], 2));
