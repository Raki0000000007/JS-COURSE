function getvalue(num1){
    console.log(num1)
}
getvalue(100)


getvalue(10,111,112)
//here it will displays the first number as the output 
//when we have multiple values as the arguments when we call the function then th code will confuse regarding this  so we use spread liek below

function get(...inputs){
    console.log(inputs)
}
get(111,112,113,114)
//we will get the output in array

//if we give 1 or 2 varibles name and use spread operator then the 2 variables will hold the initial value and the remaining values will be stored in array like below

function marks(maths,english, ...subjects){
    return subjects
}
console.log(marks(15,19,16,88))//the last 2 elements of the output will be stored inthe array


//when we have multiple objects and we need to get the output for the perticular object we use the below code

const vech={
    model:2002,
    name:"suzuki"

}
const vech2={
    model:"v2",
    name:"mt-15"
}

function machine(anyobject){//we define the parameter as the anyobject(we acn give any)this is just to combine the number objects we have
    console.log(`the ${anyobject.name} car is of ${anyobject.model} model`)//we access the object using the obj name 
}
machine(vech)//displaying

function bike(anyobject){
    console.log(`the Bike ${anyobject.name} is of ${anyobject.model}model`)
}
bike(vech2)

//so thertr are 2 object with 2 diff name and we called them by using the anyobject argument 





//**************************************SCOPE********************************/
let x=10;
const pi=3.14;

//let and const are the block scope
var r=0;
//var should not be used int the code as it can mess up bcs of the Accessibility in the code

//if the same variable with the var is defined inside the scope and in the global then they both will have different valus be printed
