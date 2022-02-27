// Code your solution here

const { ResourceLoader } = require("jsdom");

// create function called findMatching with 2 params - array of names and a string
// returns a matching list of drivers
// need to use tolowercase to make the names the same

// function findMatching (arr, string) {
//     return arr.filter(driver => string.toLowerCase() === driver.toLowerCase())
// }


// create a function called fuzzymatch 
// parameters are 1 - an array of drivers names and 2 a string
// I need to compare the firstletters of the drivers to the string 
// then I need to return the actual name

// function fuzzyMatch (arr, string) {
//     return arr.filter(driver => driver.startsWith(string))
// }

// create a function called matchName 
// takes two parameters string and an array of objects
// use filter method to iterate through the array of objects whose name key matches the provided string

// function matchName (arrOfDrivers,string) {
//     return arrOfDrivers.filter(driver => driver.name === string)
// }


function findMatching (arr, string) {
    return arr.filter(driver => string.toLowerCase() === driver.toLowerCase())
}

function fuzzyMatch (arr, string) {
    
}

