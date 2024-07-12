///singleton
const User=new Object();
// console.log(User)//the way to craete the object using the constructor (singleton)

//nesting
const User2={
    email:'rmu@gmail.com',
    name:{
        fullname:{
            firstname:'rmu',
            lastname:'kumar'
        }
    }
}
// console.log(User2.name)//1st level nesting
// console.log(User2.name.fullname)//we entred into the next nesting
// console.log(User2.name.fullname.firstname)//so on

//if we hav e2 onject and we need to conbine so folloiing is th way
const onj1={1:'a',2:'b',3:'c'}
const onj2={3:'a',4:'b',5:'c'}
const onj3={6:'a',7:'b',8:'c'}
// console.log(onj1,onj2,onj3) //the same problem we will get into that it will treat as the seperate elememnt\
const onj4=Object.assign({},onj1,onj2,onj3)
console.log(onj4)//we can use this or spread

const sprea={...onj1,...onj2,...onj3}
console.log(sprea)//modern way of combining objects 

//some methods

console.log(Object.keys(User2))//used to get the keys of object
console.log(Object.values(User2))//used to get the values of object
console.log(Object.hasOwnProperty('email'))//to check if the property is present in the onject 
