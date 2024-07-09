let fname='ms'
let lname='dhoni'

console.log(fname + lname)
// //above is the old type of syntax

console.log(`The first name is ${fname} and the last name is ${lname}`)

// //we can also decalre and initialze the string as below
let Bike=new String('YamahaMotors')
console.log(Bike)
// //this will gives us the many more methods that we can perform over the strings and we will get key value pairs and the length property

console.log(Bike[3])
// //the above line looks like accessing the elements in the array but they are actually the key value pairs

//*********************some methods******************************/


console.log(Bike.length)
console.log(Bike.toLowerCase())
console.log(Bike.toUpperCase())
console.log(Bike.indexOf('a'))
console.log(Bike.substring(0,5))
console.log(Bike.slice(-11,5))//if the string is of length 12 the negative index eill start from 12 itself so 0 and 12 are same and we can go on ;line -11,-10
console.log(Bike.trim()) //this will removes the space at start and end
let name='rakesh-anivala-karnataka'
console.log(name.replace('-',' '))
this will replace the character or the string with the input that we give
console.log(name.includes('rak'))
console.log(name.split('-'))