function sameAmount(str, reg1, reg2) {
    veryfied = typeof str === 'string' && typeof reg1 === 'object' && typeof reg2 === 'object' ? true : false;
    const rslt1 = str.match(reg1);
    const rslt2 = str.match(reg2);
    if (rslt1 === null || rslt2 === null) {
        return false
    }
    return rslt1.length === rslt2.length ? true : false
}
