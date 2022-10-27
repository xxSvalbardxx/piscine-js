// this function should find the closest integer to the float with powers of 10.

let newInt =0;


function round(n) {
    let i = 0;
    for (i = 0; i < n-1; i++) ;

    newInt= i;
    rslt = n - newInt;
    if (rslt < 0.5) {
        n -= rslt;
    } else if (rslt >= 0.5) {
        n += (1 - rslt);

    }
    return n;
}
console.log(round(-49.2));