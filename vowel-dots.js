
const vowels = /[aeiouAEIOU]/g;

function vowelDots(str) {
    let rslt = "";
    let j = 0;
    const mtch = str.match(vowels);
    if (mtch === null) {
        return str
    }
    for(let i = 0;i<str.length;i++){
        if(str[i]!==mtch[j]){
            rslt += str[i]
        }
        if(str[i]===mtch[j]){
            rslt += str[i]+'.'
            j++
        }
    }
    console.log(rslt)
    return rslt
}
vowelDots("Hello World");