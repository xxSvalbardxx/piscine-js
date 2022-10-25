const words = (str) => str.split(' ');
const sentences = (arr) => arr.join(' ');
const yell = (str) => str.toUpperCase();
const whisper = (str) => '*' + str.toLowerCase() + '*';
const capitalize = (str) => str[0].toUpperCase() + str.substring(1).toLowerCase;