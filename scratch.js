
// function checkArr(objOld,arry){
//   newArry =[]
//   newArry = arry.forEach(i => { if(arry[i] = )
    
//   });
// }
// function createArr(arr){
//   newArr = []
//   arr.forEach(i => {
//     if(Number.isInteger(arr[i]))
//     {newArr.push(arr[i])}
// })
// console.log('newArr: '+newArr)
// }
// createArr(arr1)

// string = 'mountain'
// newString = string.charAt(0).toUpperCase() + string.slice(1)
// console.log(newString)


// newarr = ['fish', 'and', 'chips']
// console.log(newarr[10])

// let objToCopy = {
//   foo: 1,
//   bar: 2,
// }


// function copyObj(sourceObject, keys){
//   let destinationObject = {}
//   if(keys){
//     keys.forEach(key=>destinationObject[key]=sourceObject[key])
//     console.log(destinationObject)
//   }
//    //else{console.log(Object.assign(destinationObject, sourceObject))}
//   }

// copyObj(objToCopy, ['foo'])


// let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

// console.log(trees[trees.length - 1]);
// trees.pop();
// console.log(trees[trees.length - 1]);

// for (i=0; i<=100; i++){
//   console.log(i*2)
// }

// Using the code below as a starting point, write a while loop 
// that logs the elements of array at each index, 
// and terminates after logging the last element of the array.

// let array = [1, 2, 3, 4];
// let index = 0;
// let i = 0
// while (index<=array.length){
//   console.log(array[index])
//   index++
// }
// iterate and log length, skip over null
// let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 
// 'London', 'Beijing', null];
// cities.forEach(i=>{
//   if(i === null){
//     continue
//   }console.log(cities[i])
// })

// for(i=0; i<cities.length; i++){
//   if(cities[i]===null){
//     continue
//   }else{
//     console.log(cities[i].length)
//   }
// }

// Write a while loop that logs all odd natural numbers between 1 and 40.
// let i = 0
// while ((i>0 && i<41)){
//   console.log(i);
//   i++
// }

// Loop over the elements of the array fish, logging each one. 
// Terminate the loop immediately after logging the string 'Nemo'.

// let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
// for(i=0;i<fish.length;i++){
//   if(fish[i]==='Nemo'){
//     break
//   }
//   console.log(fish[i])}


// What is the difference between the following two code snippets? 
// Check the MDN documentation on while and do...while.

// Initialize a variable weather with a string value being 
// "sunny", "rainy", or anything else.

// Write an if statement that logs:

// "It's a beautiful day!" if weather is assigned to the string "sunny",
// "Grab your umbrella." if weather is assigned to the string "rainy", and
// "Let's stay inside." otherwise.
// Test your code with different values for weather.

// let weather = 'cloudy'
// switch(weather){
//   case 'sunny':
//     console.log('It\'s a beautiful day')
//     break;
//   case 'rainy':
//     console.log('grab your umbrella')
//     break;
//   default:
//     console.log('let\'s stay inside')
// }

// function compareByLength(a,b){
//   if(a.lenth < b.lenth){
//     return -1
//   }else if (a.lenth > b.length){
//     return 1
//   }else {
//     return 0
//   }
// }
// compareByLength('patience', 'perseverance'); // -1
// compareByLength('strength', 'dignity');      //  1
// compareByLength('humor', 'grace');           //  0


//'Captain Ruby' to produce the string 'Captain JavaScript'


// string='Captain Ruby'
// console.log(string.split(' ')[0])
// 'Captain Ruby'. replace('Ruby', 'JavaScript')
// function greet(lan){
//   switch(lan){
//     case 'en': return 'Hi!';
//     case 'fr': return 'Salut'
//     case 'pt': return 'Ola'
//     case 'de': return 'Hallo'
//     case 'sv': return 'Hej'
//     case 'af': return 'Haai'
//   }
// }

// greet('en'); // 'Hi!'
// greet('fr'); // 'Salut!'
// greet('pt'); // 'Olá!'
// greet('de'); // 'Hallo!'
// greet('sv'); // 'Hej!'
// greet('af'); // 'Haai!'


// function extractLanguage(string){
//   i = string.includes('_')
//   console.log(string.slice(0,i+1))
// }

// extractLanguage('ko_KR.UTF-16');

// function extractRegion(lang){
//   console.log(lang.slice(3,5))
// }
// extractRegion('en_US.UTF-8');  // 'US'
// extractRegion('en_GB.UTF-8');  // 'GB'
// extractRegion('ko_KR.UTF-16'); // 'KR'


// function localGreet(lang){
//   country = lang.split("_")[1].split('.')[0]
//   switch (country){
//     case 'US': return 'Hey!'; break;
//     case 'GB': return 'Hello'; break;
//     case 'AU': return 'Howdy'
//   }
// }

// console.log(localGreet('en_US.UTF-8')); // 'Howdy!'
// ??????????????????????????????????????????????????????????????????????????????
// function myFunction() {
//   let a = 1;

//   if (true) {
//     console.log(a);
//     let a = 2;
//     console.log(a);
//   }
// }

// myFunction();

// function repeat(num, string){
//   let newWord = ''
//   for(i=0;i<num;i++){
//     newWord += string
//   }console.log(newWord)
// }
// repeat(3, 'ha'); // 'hahaha' 

// console.log(var1 = 'A pirate I was meant to be!\nTrim the sails and roam the sea!')

// let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';
// if(byteSequence.includes('x')){
//   console.log(true)
// }

// function isBlank(string){
//   splitted = []
//   splitted = string.split("")
//   splitted.forEach(i => {
//     if(string[i] !== ''){
//     return false
//   }
// }) return true
// }

// function isBlank(string){
//   return string.trim().length ===0
// }

// console.log(isBlank('mars')); // false
// console.log(isBlank('  '));   // false
// console.log(isBlank(''));     // true

//string = 'launch school tech & talk'

// function titleCase(str) {
//   splitString = str.split(' ');
//   for (var i = 0; i < splitString.length; i++) {
//       // Assign it back to the array
//       splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);     
//   }
//   // Directly return the joined string
//   return splitString.join(' '); 
// }
// console.log(titleCase(string))


function capWords(string){
  let capitalizedWords = [];
  let words = string.split(' ');
  for (i = 0; i < words.length; i++) {
    //let word = words[i];
  
    capitalizedWords.push(words[i][0].toUpperCase() + words[i].slice(1));
  }
  
  return capitalizedWords.join(' '); // 'Launch School Tech & Talk'
}
let string = 'launch school tech & talk';
console.log(capWords(string))