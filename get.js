
const get = (src, path) => {
    const keys = path.split('.');
    let res = src;
    keys.forEach(element => { 
        if (res == undefined) return res; 
        res = res[element];
    });
    return res;
}