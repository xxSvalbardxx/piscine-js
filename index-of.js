const indexOf = (arr, value, index = 0) => {
    
    // ((index === undefined) || (index <= 0)) ? index = 0 : index = index;
        for (let i = index; i < arr.length; i++) {
            if (arr[i] === value) {
                return i;
            }
        }
        return -1;

};

const lastIndexOf = (arr, value, index = 0) => {
    for (let i = arr.length - 1; i >= index; i--) {
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
console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2));