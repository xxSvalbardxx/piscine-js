function nasa(n) {
   let array = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            array.push("NASA");
        } else if (i % 3 === 0) {
            array.push("NA");
        } else if (i % 5 === 0) {
            array.push("SA");      
        } else {
            array.push(i);
        }
    }
    let string = array.join(" ");
    return string;
}
