function sameAmount(str, reg1, reg2) {
    const reg1 = new RegExp(reg1 , "g");
    const reg2 = new RegExp(reg2 , "g");

    const rslt1 = str.match(reg1);
    const rslt2 = str.match(reg2);
    if (rslt1 === null || rslt2 === null) {
        return false
    }
   
    return rslt1.length == rslt2.length ? true : false
}
