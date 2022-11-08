
// pick: return an object contains only those keys which appear in the string or array of strings.
function pick(obj, str){
    let obj2 = {}
    let keys = Object.keys(obj)
    keys.forEach(key => {
        if (str.match(key)){
            obj2[key] = obj[key]
        }
    })
    return obj2
}

// omit: return an object contains only those keys which do not appear in the string or array of strings.
function omit(obj, str){
    let obj2 = {}
    let keys = Object.keys(obj)
    keys.forEach(key => {
        if (!str.match(key)){
            obj2[key] = obj[key]
        }
    })
    return obj2
}

 console.log(pick({a:1, aa:2, c:3}, 'a')) // {a:1}
// console.log(omit({a:1, b:2, c:3}, ['a', 'c'])) // {b:2}