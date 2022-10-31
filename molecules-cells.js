function RNA(DNA) {
    let fuck = [];
    for (i=0 ; i < DNA.length ; i++) { 
        if (DNA[i] === "G") {
            fuck.push("C");
        } else if (DNA[i] === "C") {
            fuck.push("G");
        } else if (DNA[i] === "T") {
            fuck.push("A");
        } else if (DNA[i] === "A") {
            fuck.push("U");
        } else {
            return "Invalid input";
        }
    }
    let rslt = fuck.join("");
    return rslt;
}


function DNA(RNA) {
    let tamere = [];
    for (i=0 ; i < RNA.length ; i++) {
        if (RNA[i] === "C") {
            tamere.push("G");
        } else if (RNA[i] === "G") {
            tamere.push("C");
        } else if (RNA[i] === "A") {
            tamere.push("T");
        } else if (RNA[i] === "U") {
            tamere.push("A");
        } else {
            return "Invalid input";
        }
    }
    let rslt = tamere.join("");
    return rslt;
}

console.log(RNA("GCTA"));
console.log(DNA("CGAU"));

// DNA | RNA
// G  -  C
// C  -  G
// T  -  A
// A  -  U