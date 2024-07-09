//********8NUMBERS************/

let numb=100;
console.log(numb)

let numb2=new Number(101);
console.log(numb2)
//both the ways are sme but we declared them in different wys 
//in the second way it determines thta it is a number and whereas in the first it automatically defined as the number 

console.log(numb2.toString())//consverted to string 
console.log(numb2.toString().length)
console.log(numb2.toFixed(2));//gives us the decimal values of our requirement 

let lakh=1000000;
console.log(lakh.toLocaleString())

//numbers do have other methods like max,min,integer and so on


//**********************MATHS**********************/
console.log(Math.abs(-25))//absolute value or positive of the user provides input
console.log(Math.round(99.99))//rounds off to the nearest value
console.log(Math.ceil(5.2))//rounds off to the upper value
console.log(Math.floor(99.99))///rounds off to the lower value
console.log(Math.sqrt(9));//returns the square root of the give number
console.log(Math.pow(2,3))//returns the power of the give input

console.log(Math.random())///generates the random number between 0 and 1
console.log(Math.floor(Math.random()*20)+1)//adding 1 at the end bcs somethimes the values that will genetrate maybe 0.01 so using floor it will round off to 0 hence adding 1 to get the minimum value as 1 

//incase if we need the values between 2 numbers so then we will use the below code

let min=100,max=200;
console.log(Math.floor(Math.random()*(max - min + 1))+min)
console.log(Math.ceil(Math.random()*(max - min ))+min)
