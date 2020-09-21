var randomBodyParts = [
    "head", 
    "arms",
    "legs",
    "feet"
];

var randomAdjectives = [
    "hot",
    "ugly",
    "messy",
    "short"
];

var randomWords = [
    "people",
    "dogs",
    "cats",
    "tree",
    "book"
]
    
var randomBodyPart = randomBodyPars[Math.floor(Math.random() * 4)];

var randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];

var randomWord = randomWords[Math.floor(Math.random() * 5)];

console.log(randomBodyPart);
console.log(randomWord);
console.log(randomAdjective);