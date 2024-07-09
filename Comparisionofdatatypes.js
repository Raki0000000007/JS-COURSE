console.log('2'>1)
console.log(1 < false)
console.log(null >= 0)
//comparison converts null to number treating is as 0 so it gives output as true for last line

console.log(undefined >= 0)
console.log(undefined == 0)
//galse

//== compares the vales
//== compares the values with datatypes

console.log('2'===2)//false
console.log(2===2)//true



// ***************************MEMORY ALLOCATIONS*********************************************

//the premitive will go to stack we will get a copy of the variable or what we defined 
//the non-primitive goes to heap we will get the reference ,i.e, the changes you made will change the original object or function or array 

let myfirstmobile='nothing'
console.log(myfirstmobile)

let mysecondmobile=myfirstmobile;

console.log(mysecondmobile)
//above code give the copy of the primitive datatype variable

let userinfo={
    name:"raju",
    age:20,
    place:'Bengaluru'
};

console.log(userinfo)

let userinfo2=userinfo;

console.log(userinfo2)

userinfo.place='Medras'

console.log("///////////////////////")
console.log(userinfo)
console.log(userinfo2)

//so above code doesn't gives the copy instead it takes the reference(original object) and changes the values