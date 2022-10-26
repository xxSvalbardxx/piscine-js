const indexOf = (arr, value, index) => {
    
    if ((index === undefined) || (index <= 0)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === value) {
                return i;
            }
        }
    }else if (index < 0) {
        for (let i = index; i < arr.length; i++) {
            if (arr[i] === value) {
                return i;
            }
        }
    }
    return -1;
};

const lastIndexOf = (arr, value) => {
    for (let i = arr.length-1; i >= 0; i--) {
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
