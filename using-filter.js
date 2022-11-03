// must use filter

function filterShortStateName(arr){
    return arr.filter(function(state){
        return state.length < 7;
    });
}

function filterStartVowel(arr){
    return arr.filter(function(state){
        return state[0].match(/[aeiou]/i); // i for case insensitive
    });
}

function filter5Vowels(arr){
    return arr.filter(function(state){
        return state.match(/[aeiou]/gi).length >= 5; // g for global, i for case insensitive
    });
}
// is there multiple time the same voyel in the state name?

const filter1DistinctVowel = (arr) => {
    return arr.filter(str => { 
        let vowels = str.match(/[aeiou]/gi);
        let flag = false; 
        Loop:
        for(let i=0;i<vowels.length-1;i++){
            for(let j=i+1;j<vowels.length;j++){
                if(vowels[i].toUpperCase()!==vowels[j].toUpperCase()){
                    flag = false;
                    break Loop;
                }
            }
            flag = true;
        }
        return flag;
    });
}


function multiFilter(arrOfObj){
    return arrOfObj.filter(function(obj) {
        let capital = obj.capital;
        let name = obj.name;
        let tag = obj.tag;
        let region = obj.region;
    
        return capital.length > 8 && filterStartVowel(name) && tag.match(/[aeiou]/i) && region !== 'South';
    });
}