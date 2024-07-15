//functions
//when we want to execute the code more than once again and again we put that part of code in the funtion and call that as many time we want

// console.log('R')
// console.log('A')
// console.log('K')
// console.log('E')
// console.log('S')
// console.log('H')
//instead of above code we can make this easier by using function

function myName(){
    console.log('R')
    console.log('A')
    console.log('K')
    console.log('E')
    console.log('S')
    console.log('H')
}
 myName()

//consider you need to add 2 diff number one after the other so we use functions like below

function sumOfNumbers(num1,num2){//parameters
console.log(num1+num2)
}
let results = sumOfNumbers(1,1)
console.log('result is',results)//we will gwt as undefined,so function is not returning anyrhing it is just consoling the staement in the function

//so we can use below code
function sumOfNumbers(num1,num2){//parameters
    let results2=num1+num2;
    return results2
    }
   let sum=sumOfNumbers(2,2)
    console.log('sum is',sum)//tihs will return the output from the function that is 8 whre we used the return statement
   console.log(`the sum is` ,sumOfNumbers(9,9));
    //if any console statement or return staement return after the retrn statement then that code will be unreachable and that won't executes   

 function login(username){
    return `the suer ${username} is logged in`
 }
 //login('ramesha')//this will not return anything bcs THE FUNCTION IS RETURNIN THE VALUE BUT WE HAVEN'T STORED IN ANY VARIABLE OR WE HAVEN;T INSTRUCTED TO LOG THE OUTPUT 

 console.log(login('ramesha'))//we logged using the console staremnr
 let employee=login('sureha')
 console.log(employee)//we stored the vaule in the seperate variable and logged bothe the ways are correct
