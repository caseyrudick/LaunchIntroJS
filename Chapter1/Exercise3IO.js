//greet the user by name
//line 4 uses Node's built-in require function to import readline-sync into your function
//and returns the library as an object then the question method is called 
/*
let rlSync = require('readline-sync')
let name = rlSync.question("What's your name?\n")
console.log(`Good morning ${name}!`)


let rlSync = require('readline-sync')
let number1 = rlSync.question("Enter the first number \n")
let number2 = rlSync.question("Enter the second number\n")
let sum = parseInt(number1) + parseInt(number2)

console.log(`The numbers ${number1} + ${number2} equals ${sum}.`)


let name = prompt("Whats your name")
console.log(`Good afternoon ${name}`)

let rlSync = require('readline-sync')
let name = rlSync.question('What\'s your name?\n')
console.log(`Hello ${name}!`)

let name = prompt("What's your name?\n")
console.log(`Hello there ${name}`)*/

let age = parseInt(prompt("What's your age?\n"))
console.log(`You are ${age} years old`)
