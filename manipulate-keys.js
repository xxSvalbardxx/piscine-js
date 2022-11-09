function filterKeys(obj, func) {
  return Object.fromEntries(Object.entries(obj).filter(([key]) => func(key)));
}

function mapKeys(obj, func) {
    return Object.keys(obj).reduce((acc, key) => {
        acc[func(key)] = obj[key];
        return acc;
    }, {});
    }

function reduceKeys(obj, func, acc=''){
    if (acc === ''){
        return Object.keys(obj).reduce(func);
    }
    return Object.keys(obj).reduce(func,acc);
    
}


const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// output: { protein: 20 }

console.log(mapKeys(nutrients, (k) => `-${k}`))
// output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
// output: carbohydrates, protein, fat