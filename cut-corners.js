function round(n) {
    let neg = false; 
    if (n < 0) {
        n = -n;
        neg = true;
    }

    reste =  n % 1
    if (reste < 0.5) {
        n -= reste;
    } else if (reste >= 0.5) {
        n += (1 - reste);
    }
    if (neg) {
        n = -n;
    }
    return n;
}
/*
console.log(round(0.2))
console.log(round(0.5))
console.log(round(0.8))
console.log(round(-0.2))
console.log(round(-0.5))
console.log(round(-0.8))
*/

function ceil(n) {
    let neg = false; 
    if (n < 0) {
        n = -n;
        neg = true;
    }

    reste =  n % 1
    if (reste > 0) {
        n += (1 - reste);
    }
    if (neg) {
        n = -n;
    }
    return n;
}

function floor(n) {
    let neg = false; 
    if (n < 0) {
        n = -n;
        neg = true;
    }

    reste =  n % 1
    if (reste > 0) {
        n -= reste;
    }
    if (neg) {
        n = -n;
    }
    return n;
}

function trunc(n) {
    let neg = false; 
    if (n < 0) {
        n = -n;
        neg = true;
    }

    reste =  n % 1
    if (reste > 0) {
        n -= reste;
    }
    if (neg) {
        n = -n;
    }
    return n;
}