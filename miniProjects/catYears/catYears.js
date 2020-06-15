
// age to modify to cat years
var myAge = 27;

var earlyYears = 2;


//account for first 2 years of cat lives = 25 per
earlyYears *= 25;

// taking away the 2 first years since they are different
var laterYears = myAge - 2

// modify years by 4 for cat years.
laterYears *= 4

console.log("Early years =" + " " + earlyYears)
console.log("Later years =" + " " + laterYears)

// combine modify years to get my age in cat years.
var myAgeInCatYears = laterYears + earlyYears