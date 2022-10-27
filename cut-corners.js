// ajouter des puissances de 10 de manière dégressive jusqu'a l'unité; puis verif Apres la virgule si > 0.5 alors +1. 

function round(n) {
    let neg = false; 
    if (n < 0) {
        n = -n;
        neg = true;
    }
    let i = 0;
    for (i = 0; i < n-1;) {
        if (i + 10000000000 < n) i += 10000000000;
        else if (i + 1000000000 < n) i += 1000000000;
        else if (i + 100000000 < n) i += 100000000;
        else if (i + 10000000 < n) i += 10000000;
        else if (i + 1000000 < n) i += 1000000;
        else if (i + 100000 < n) i += 100000;
        else if (i + 10000 < n) i += 10000;
        else if (i + 1000 < n) i += 1000;
        else if (i + 100 < n) i += 100;
        else if (i + 10 < n) i += 10;
        else i++;
    }
    reste = n - i;
    if (reste >= 0.5) {
        i += 1;
    }
    if (neg) {
        i = -i;
    }
    return i;
}

function ceil(n) {
    let neg = false; 
    if (n < 0) {
        n = -n;
        neg = true;
    }

    let i = 0;
    for (i = 0; i < n-1;) {
        if (i + 10000000000 < n) i += 10000000000;
        else if (i + 1000000000 < n) i += 1000000000;
        else if (i + 100000000 < n) i += 100000000;
        else if (i + 10000000 < n) i += 10000000;
        else if (i + 1000000 < n) i += 1000000;
        else if (i + 100000 < n) i += 100000;
        else if (i + 10000 < n) i += 10000;
        else if (i + 1000 < n) i += 1000;
        else if (i + 100 < n) i += 100;
        else if (i + 10 < n) i += 10;
        else i++;
    }
    reste = n - i;

   
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

    let i = 0;
    for (i = 0; i < n-1;) {
        if (i + 10000000000 < n) i += 10000000000;
        else if (i + 1000000000 < n) i += 1000000000;
        else if (i + 100000000 < n) i += 100000000;
        else if (i + 10000000 < n) i += 10000000;
        else if (i + 1000000 < n) i += 1000000;
        else if (i + 100000 < n) i += 100000;
        else if (i + 10000 < n) i += 10000;
        else if (i + 1000 < n) i += 1000;
        else if (i + 100 < n) i += 100;
        else if (i + 10 < n) i += 10;
        else i++;
    }
    reste = n - i;
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

    let i = 0;
    for (i = 0; i < n-1;) {
        if (i + 10000000000 < n) i += 10000000000;
        else if (i + 1000000000 < n) i += 1000000000;
        else if (i + 100000000 < n) i += 100000000;
        else if (i + 10000000 < n) i += 10000000;
        else if (i + 1000000 < n) i += 1000000;
        else if (i + 100000 < n) i += 100000;
        else if (i + 10000 < n) i += 10000;
        else if (i + 1000 < n) i += 1000;
        else if (i + 100 < n) i += 100;
        else if (i + 10 < n) i += 10;
        else i++;
    }
    reste = n - i;
    if (reste > 0) {
        n -= reste;
    }
    if (neg) {
        n = -n;
    }
    return n;
}


//console.log(floor(14159265359.3));
//console.log(Math.floor(14159265359.3)); //14159265359*/