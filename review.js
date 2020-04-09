/*
Write a greeter function that asks for first and last name and greets the person
function greeter(first, last){
  console.log(`Hello there ${first} ${last}`)
}
let rlsync = require('readline-sync')
let firstName = rlsync.question('What is your first name? ')
let lastName = rlsync.question('What is your last name? ')
greeter(firstName, lastName)

function greeter(){
  let rlsync = require('readline-sync')
  let firstName = rlsync.question('What is your first name? ')
  let lastname = rlsync.question("What is your last name? ")
  console.log(`Hello there ${firstName} ${lastname}`)
}

greeter()

Write a numeros() that asks for 2 numbers.  Log multiplication of numbers
function numeros (){
  let rlsync = require('readline-sync')
  let num1 = rlsync.question("Enter a number: ")
  let num2 = rlsync.question('Enter another number: ')
  console.log(`This is your answer: ${num1*num2}`)
}

numeros();


Write a times() that spits back the factorial with each successive call
function times(num1, num2){
  let result = num1*num2
  console.log(result)
  return result
}

let onefactorial = times(1,1)
let twofac = times(2, onefactorial)
let three = times(3, twofac)
let four = times(4, three)
let five = times(5, four)

evenOrOdd() asks for a number and says whether its even or odd
function evenOrOdd(){
  let rlsync = require('readline-sync')
  let num = rlsync.question("Enter a number ")
  num % 2 === 0? console.log(`${num} is even`) : console.log(`${num} is odd`)
}
evenOrOdd()

allCaps() asks for a string and returns allCaps if str.length > 10
function allCaps(stringer){
  stringer.length > 10? console.log(stringer.toUpperCase()): console.log(stringer)
}
allCaps(s = require('readline-sync').question('give a string: '))


// age() for loop asks for an age and spits out ages until person is 50
function lessthan30(age, proj){
  console.log(`You\'re ${age}`)
  for(let i = 10; i<=proj; i += 10){
    console.log(`In ${i} years, you'll be ${age+i} `)
  }
}


let age = parseInt(prompt('What is your age? '))
let proj = parseInt(prompt('Enter a projection: '))
lessthan30(age, proj)
*/

// function that computes and returns the factorial for a number using for loop


// function factorial(nms){
//   let result = 1
//   for (let i = 1; i<=nms; i++){
//     result *= i
//   }console.log(result)
// }


// factorial(nms = require('readline-sync').question('Enter a number: '))

//insert a while loop into a function that asks for two numbers and returns a random number btw
//the two numbers.  While loop has function guessing until result is > 2
// function somwhile(min, max){
//   let nrandom = Math.floor(Math.random()*(max-min+1)+min)
//   console.log(nrandom)
//   let tries = 0
//   while (nrandom <=50){
//     nrandom = Math.floor(Math.random()*(max-min+1)+min)
//     console.log(nrandom)
//     tries += 1
//   } console.log(`it took ${tries} to come up with ${nrandom}`)
// }

// let min = parseInt(prompt('whats your min:'))
// let max = parseInt(prompt('whats your max:'))
// somwhile(min, max)

// 8. turn factorial into a recursion 
// function factorial(num){
//   if (num<=1){
//     return 1
//   }return num*factorial(num-1)
// }

// 9. log all of the even values from the arr1 = [1,3,6,11,4,2,4,9,17,16]
// function returnEven(arr1){
//   newArr=[]
//   for (i = 0; i < arr1.length + 1; i++){
//     if(arr1[i]%2 ===0){
//       newArr.push(arr1[i])
//     }
//   }
//   console.log(newArr)
// }
// returnEven([1,3,6,11,4,2,4,9,17,16])

// myArray.forEach(function(value)){
//   if (value %2 ===0){
//     console.log(value)
//   }
// }

// 10. return all the even values from a list of lists arr1 = [1,3,[6,,7,8],[11,4,2],[4,9,17,16]]
// arr1 = [1,3,[6,,7,8],[11,4,2],[4,9,17,16]]
// for(i = 0; i < arr1.length; i++){
//   for(j = 0; j <arr1[i].length; j++){
//     let val = arr1[i][j]
//     if(val%2 ===0){
//       console.log(val)}
//   }
// }
// function returnEven(arr1){
//   result = []
//   for(i=0; i <arr1.length; i++){
//     for(j=0; j <arr1[i].length; j++){
//       if (arr1[i][j]%2 !=0){
//         continue
//       }else result.push(arr1[i][j])
//     }
//   }console.log(result)
// }
// function returnEven(arr1){
//   let result = []
//   arr1.forEach(function(nestedArray){
//     nestedArray.forEach(function(value){
//       if(value %2 ===0){
//         result.push(value)
//       }
//     })
//   })
// }
// let arr1 = [[1,3,6,11],[4,3,4],[3,1,2,4]]
// returnEven(arr1)
// let numbers = [1,2,3,4]
// let squares = numbers.map(num=>num*num)

// #11
// use map function to create a new array that contains one element for each element
//     in the original...if even, return 'even' else 'odd'
// let arr1 = [1,3,6,11,4,2,4,9,17,16]
// let newarr = arr1.map(function(value){
//   if(value %2===0){
//     return 'even'
//   }else{return 'odd'}
// })
// console.log(newarr)

// #12
// use filter method to return a new array with all the integers
//     hint: Number.isInteger(value)
// arr1 = [1,'f',6,'d',4,'e',4,9,17,16]
// newarry= arr1.filter(function(value){
//   return Number.isInteger(value)
// })
// console.log(newarry)
//
// let numbers1 = [1,'a',3,NaN,5,null,7,8,1,2]
// let newarray = numbers1.filter(num=>Number.isInteger(num))
// console.log(newarray)

// #13
// use map and filter to determine the lengths of al the elements in an array of string
// values, then discard the even values
// let arr = ['a','abcd','abcde','abc','ab']
// newarr = arr.map(num =>num.length)
// newarr = newarr.filter(num=>num%2!==0)
// console.log(newarr)

//use reduce to compute the sum of the squares of all the numbers in an array
// let numbers = [3,5,7]
// sumOfSquares = numbers.reduce((accumulator, number)=>{
//   return accumulator + number*number
// },0)
// console.log(sumOfSquares)
// let numbers = [3,5,7]
// nums = numbers.reduce((accumulator, currentValue)=>{accumulator+currentValue},0)
// console.log(numbers)

// #15
// without useing a for,while or do/while loop, write some code that checks whether hte number 3
// appears inside these arrays
// random reduce exercise
// const numbers = [1,-1,2,3]
// if(numbers.includes(3)){
//   console.log(true)
// }else{
//   return false
// }

// #16 
// use reduce to add up the strings in this list
// let arr = ['a','abcd','abcde','abc','ab']
// let newarr = arr.reduce((accumulator, currentValue)=>{
//   return accumulator + currentValue
// },'')
// let arr = ['a','abcd','abcde','abc','ab']
// newarr = arr.reduce((accumulator, currentVal)=>accumulator+currentVal.toUpperCase(),'')
// console.log(newarr)

// #17
// write some code to extract the word 'mem' from the following nested array

// #18
// create an array object
// let myArray = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3
// }

// #19
// create an arry from the keys of obj1, don't mutate
// let obj = { b:2, a:1, c:3}
// ObjKeys = Object.keys(obj)
// ObjkeysCap = ObjKeys.map(i=>i.toUpperCase())
// // above is short hand of: function(i){i.toUpperCase()} 
// console.log(ObjkeysCap)

// #20 
// create a new object named myObj that uses myProtoObjas its prototype
// add qux = 3 as new key pair
// let myProtoObj = {
//   foo:1,
//   bar:2,
// }
// let newObj = Object.create(myProtoObj)
// newObj.qux = 3

// #21 
// 1) iterate over keys via forEach versus 2) for...in 
// 3) use for...in with .hasOwnProperty
// Explain the difference
// Object.keys(newObj).forEach(i=>console.log(i))
// for(key in newObj){console.log(key)}
// for(let key in newObj){
//   if(newObj.hasOwnProperty(key)){
//     console.log(key)
//   }
// }

// #22
// create a fuction that creates and returns a copy of an object
// takes two arguments(object to copy and an array of keys that you want to copy)
obj1 = {
  1:'a',
  2:'b',
  3:'c',
}
keys = [1,2]
function copyObj(obj, keys){
  let newObj = {}
  if(key){
    keys.forEach(key=> {newObj[key] = obj1[key]
      
    });
    console.log(newObj)
  }else{
    console.log(Object.assign(newobj,obj))}
}
copyObj(obj1)

newObj = {}

Object.assign(newObj,obj1)
console.log(newObj)
