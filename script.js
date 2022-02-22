//window.alert("loaded")
// Note: We'll be using the Fahrenheit scale for this assignment.

// This code sets a random starting current temperature between 0 and 100 degrees.
let currentTemp = Math.round(Math.random() * 100)

// Give the thermostat user a status message.
console.log(`The current temperature is ${currentTemp}°F`)

//what is the preferred temperature? - 66 - or ask user for it

//RULES: 
// all numbers are whole numbers
// all numbers are in farenheight

/************PseudoCode
 * 
 * 
 * 
 *while the current temperature is not 66 (aka the preferred temperature)
 *   //if our currentTemp is greater than our preferred (too hot)
 *       //lower the temperature by 1 degree
 *       //display heating
 *   //if our currentTemp is lower than our preferred (too cold)
 *       //increase the temperature by 1 degree
 *       //display cooling
 *   //display the current temp

******End Psedocode 
*/
//get from user
let preferredTemp = parseInt (window.prompt("What temperature in F do you want it to be?"))
//find how to convert from string... Oh its parseInt()
console.log(preferredTemp, "What kind of data was this?", typeof preferredTemp)
//while the current temperature is not 66 (aka the preferred temperature)
while (currentTemp !== preferredTemp){
    //if our currentTemp is greater than our preferred (too hot)
    if(currentTemp > preferredTemp){
        currentTemp = currentTemp - 1
    }

    //if our currentTemp is lower than our preferred (too cold)
    if(currentTemp < preferredTemp){
        currentTemp = currentTemp + 1
    }
    
    console.log(`The current temperature is ${currentTemp}°F`)
}