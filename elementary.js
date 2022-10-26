
const multiply = (a, b) => {
    let result = 0;
    for (let i = 0; i < Math.abs(b); i++) {
        result += Math.abs(a);
    }
    return b > 0 ? result : -result;
    }

const divide = (a, b) => {
    let result = 0;
    let absA = Math.abs(a);
    let absB = Math.abs(b);
    while (absA >= absB) {
        absA -= absB;
        result++;
    }
    return a > 0 ? result : -result;
}

const modulo = (a, b) => {
    let absA = Math.abs(a);
    let absB = Math.abs(b);
    while (absA >= absB) {
        absA -= absB;
    }
    return a > 0 ? absA : -absA;
}
