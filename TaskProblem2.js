let message = "There are 14 people in the room, we all are ready to learn the new things, sometimes our moral get down, but we are still in hustling for learning. After 2 months, there will be change in our way of coding."

// task-1 separate the strings on (,) bases and put it in an array (in a single array)
console.log("separate the strings");
const sepArray = message.split(",");
console.log(sepArray);

// task-2 separate the words in an array starting with T
console.log("words with 'Upper T' ");
let words= message.split(/\s+/);

let wordswithT = words.filter(words=>words.startsWith('T'));
console.log(wordswithT);

console.log("words with 'lower t' ");
let wordsWitht= words.filter(words=>words.startsWith('t'));

console.log(wordsWitht);


// task-3 find numbers in string.
console.log('numbers in the string');

let tofindNumber= message.match(/\d+/g);
console.log(tofindNumber);


// task-4 Find 'hustling' & 'learning' and merge them & make it 'hustling-learning' .
console.log("hustling-learning")
// if(sepArray.includes('hustling') && sepArray.includes('learning')){
//     console.log('hustling-learning');
// }

let hustlingMerge = message.replace(/hustling\s+for\s+learning/g, 'hustling-learning');
console.log(hustlingMerge);