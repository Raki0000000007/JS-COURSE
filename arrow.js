// //*******************************THIS*****************************8*/

// const user={
//     name:'raki',
//     age:55,
//     salary:function(){
//         console.log(`Hi ${this.name} your age is ${user.age}`)//this referes to the current object that we are in and the user.age also works the same 
//         console.log(this)//this will return the array
//     }
// }
// user.salary()//we will get the output
// console.log(this)//we  will get the empty block{} as we are in the node environment but if are executing this in the colsole then we may get some windows object etc  NOTE:-THIS IS ONLY IN OBJECT if we do this in function then we may get different values


// // function comp(){
// //     console.log(this)
// // }
// // comp()//we will get the some of the documentation 

// function comp(){
//     let mouse='bluetooth_mouse'
//     console.log(this.mouse)
// }
// comp()//we will get undefined because this will work in objects not in function at thi momoent(there are other ways to do this )



// //*****************************ARROW FUNCTION***************************/
let arrow=(user1)=>{
   return user1             //explict return
}
console.log(arrow('raki'))
let tt = ('raj')
console.log(tt)

//we can write the above arrow function as below

let arrow_2=(digit1,digit2)=>(digit1+digit2)//implict return
console.log(arrow_2(99,1))

//incase if we wan to return the object then we need to wrap that in the paranthesis lkike below

let para=()=>({
    name:'govi',
    age:84
})
console.log(para())