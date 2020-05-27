// JS for kelvin to fahrenheit

// base temp to covert. 
//original project js
var kelvinTemp = 301
console.log("kelvin" + " " + kelvinTemp)


// finding celsius from kelvin
var celsiusTemp = kelvinTemp - 273.15
console.log("celsius" + " " + celsiusTemp)

// fahrenheit from celsius
var fahrenheitTemp = Math.floor(celsiusTemp * (9/5) + 32) 
console.log("fahrenheit" + " " + fahrenheitTemp)


//take user input of kelvin temp

function runTemp(){
    document.getElementById("tempInput").value
    var temperature = temptInput.value
    console.log(temperature)
    return temperature;
};

console.log(temperature)