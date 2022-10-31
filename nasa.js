function nasa(n) {
   let string = "";
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            string += "NASA ";
        } else if (i % 3 === 0) {
            string += "NA ";
        } else if (i % 5 === 0) {
            string += "SA ";        
        } else {
            string += (i + " ");
        }
    }
}
