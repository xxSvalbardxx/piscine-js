function round(n) {
    let neg = false; 
    if (n < 0) {
        n = -n;
        neg = true;
    }

    let reste = mod( n , 1);
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

    let reste =  mod(n , 1);
    if (reste > 0) {
        n += (1 - reste);
    }
    if (neg) {
        n = -n+1;
    }
    return n;
}

function floor(n) {
    let neg = false; 
    if (n < 0) {
        n = -n;
        neg = true;
    }

    let reste =  mod(n , 1);
    if (reste > 0) {
        n -= reste;
    }
    if (neg) {
        n = -n-1;
    }
    return n;
}

function trunc(n) {
    let neg = false; 
    if (n < 0) {
        n = -n;
        neg = true;
    }

    let reste =  mod(n , 1);
    if (reste > 0) {
        n -= reste;
    }
    if (neg) {
        n = -n;
    }
    return n;
}
function mod(a, b){
    var negative = false;
    if(a < 0){
        negative = true;
        a = -a;
    }
    if (b < 0){
        b = -b;
    }
    var count = 0;
    while(a >= b){
        a -= b;
        count++;
    }
    if(negative){
        return -a;
    }
    return a;
}