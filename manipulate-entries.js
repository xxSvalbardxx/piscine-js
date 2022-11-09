// small database with nutrition facts, per 100 grams
// prettier-ignore
/*
const nutritionDB = {
    tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
    vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
    oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
    onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
    garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
    paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
    sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
    orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
}
*/

function filterEntries(obj = {}, func) {
    return Object.fromEntries(
        Object.entries(obj).filter(([key, value]) => func(value))
    );
}

function mapEntries(entries) {
  return entries.map((entry) =>
    entry.type === "entry" ? entry : { type: "entry", ...entry }
  );
}

function reduceEntries(entries) {
  return entries.reduce((acc, entry) => {
    if (entry.type === "entry") {
      acc.push(entry);
    }
    return acc;
  }, []);
}

function totalCalories(entries) {
  return entries.reduce((acc, entry) => acc + entry.calories, 0);
}

function lowCarbs(entries) {
  return entries.filter((entry) => entry.carbs < 10);
}
function cartTotal(entries) {
  return entries.reduce((acc, entry) => acc + entry.price, 0);
}

console.log(filterEntries(nutritionDB , (nutrient) => nutrient <= 12));
console.log("------------------------------------------------------------");
console.log(mapEntries(nutritionDB, (v) => v + 1));
console.log("------------------------------------------------------------");
console.log(reduceEntries(nutritionDB, (acc, cr) => acc + cr));
console.log("------------------------------------------------------------");
console.log(totalCalories(nutritionDB, (acc, cr) => acc + cr)); 
console.log("------------------------------------------------------------");
console.log(lowCarbs(nutritionDB, (acc, cr) => acc + cr));
console.log("------------------------------------------------------------");
console.log(cartTotal(nutritionDB, (acc, cr) => acc + cr));
console.log("------------------------------------------------------------");
