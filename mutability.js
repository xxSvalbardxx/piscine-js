const clone1 = Object.assign({}, person);
const clone2 = Object.assign({}, person);
const sameperson = person;

sameperson.age += 1;
sameperson.country = 'FR';