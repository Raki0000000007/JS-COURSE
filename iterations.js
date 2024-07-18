//for loop
for (let i = 0; i < 10; i++) {
   console.log(i)    
}//will print all the numbers starting from the 0 to 9(as we have given the condition as <10)

for (let i = 0; i < 100; i++) {
    if(i%2==0){
        console.log(`${i} is the even number`)
    }else{
        console.log(`${i} is ot the even number`)
    }
}//we used the conditional statement inside the loop to find out the even numbers from 1 to 100

const myArray=['ks','wl','gh','qp']
for (let index = 0; index < myArray.length; index++) {
 
  console.log(myArray[index])  
}//this loops throught he array and prints the elements inside the array    

for (let i = 0; i < 10; i++) {
    console.log(`inner loop element is ${i}`)
    for (let j = 0; j < 10; j++) {
        console.log(`inner loop element is ${i} and outer loop element is ${j}`)
        
    }  
}//this is nested looping where the main loop will loop once and waits for the innner loop to completes its iteration

for (let i = 1; i < 10; i++) {
    console.log(`inner loop element is ${i}`)
    for (let j = 1; j < 10; j++) {
        console.log(`the table of ${i} is ${i} * ${j} = `,i*j)
        
    }  
}

//break and continue

for (let i = 1; i <= 10; i++) {
    if(i==7){
        console.log('thala for a reason')
        break;//so as the if condition is true and the break statement is writtenin the code, the code execution will break and comes out of the loop
    }
    console.log(i) 
}

for (let i = 1; i <= 10; i++) {
    if(i==7){
        console.log('thala for a reason')
        continue;//so as the if condition is true and the constinue statement is writtenin the code, the code execution willskip the current iteration and moves forward
    }
    console.log(i) 
}

//break==>will comes out of the loop
//continue==>will skip the current iteration