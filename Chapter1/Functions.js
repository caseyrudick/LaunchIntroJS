/*function say(words){
  console.log(words)
}


say('Hello')
say('hi')
say('how are you')
say('I\'m fine')

greetPeople()
function greetPeople(){
  console.log('Good Morning')
}
let greetPeople1 = () => console.log("Good Morning Gorgeous!")
greetPeople1()

let add = (a,b) => a + b
let getNumber = text => {
  let input = prompt(text)
  return Number(input)
}

let number1 = getNumber('Enter a number: ')
let number2 = getNumber('Enter another number: ')
console.log(add(number1, number2))

//Exercise 2
let helloPeople = (a,b) => `Hello there, ${a} ${b}`
let getNames = text => {
  let name = prompt(text)
  return name
}
let firstName = getNames('Enter your first name ')
let LastName = getNames('Enter your last name: ')
console.log(helloPeople(firstName, LastName))

//Exercise 3
//Write a pgraom that uses multiple method to multiple two numbers and returns the result
//as the user to enter the two numbers then output hte numbers nad result as a simple equation

let multy = (a,b) => `${a} * ${b} = ${a*b}`
function askNumbers(prompt){
  let rlSync = require('readline-sync')
  return parseFloat(rlSync.question(prompt))
}
let a = askNumbers('Enter a number: ')
let b = askNumbers('Enter a number: ')
console.log(multy(a,b))


num1 = askNumbers()
*/

//Exercise 4 use the times function show below to write a program that logs the value of 1!, to 5!
//to the console

function factor(num1, num2){
  let result = num1 * num2
  console.log(result)
  return result
}
let onefactorial = factor(1,1)
let twof = factor(2, onefactorial)
let three = factor(3, twof)
let four = factor(4, three)