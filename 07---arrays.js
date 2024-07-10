const arr1=[1,2,3,4,5,6,7]
const arr2=['q','w','e','r']
const arr3= new Array(9,8,7,4,5,6)//another way of delaring the array
console.log(arr1[1])//o/p will be 2

// //********METHODS********/
arr1.push(8)//adds the elemtns at the last
console.log(arr1)
arr1.push(9)
console.log(arr1)
arr1.pop();
console.log(arr1)//removes the last element
arr1.unshift(10);
console.log(arr1)//adds the elements at the beggining of the array
arr1.unshift(11)
console.log(arr1)
arr1.shift();
console.log(arr1)//removes the elements from the begging of the array
arr1.shift()
console.log(arr1)
console.log(arr1.includes(9))//returrns false a sthe elemet doesn't exist
console.log(arr1.indexOf(5));
const A=arr1.join()
console.log(A)
console.log(typeof A)//gives string ,when we join the arrays it converts the array into string 
console.log(arr1)
const sl1=arr1.slice(1,3)
console.log(sl1)

const sl2=arr1.splice(1,3)
console.log(sl2)
console.log(arr1)

 const bikes=['splendor','mt-15','r-15','unicorn']
 const scooty=['pep+','activa','aerox']

bikes.push(scooty)
console.log(bikes) //this will modify in the existing array the pushed array is treated as the seperate element 

const combine=bikes.concat(scooty)
// console.log(combine);//this will craete the new array and the all the elements are added and trated as single array
//so better to use the SPREAD mentod instead of using the push(concat is also ok)

const spr=[...bikes,...scooty]
console.log(spr)

const confusing_array=[1,2,3,[4,5],6,[7,[8,9]]]
console.log(confusing_array)
// //inthe above case use flat method so that all the elements will be returned into new array
const rearranged_array=confusing_array.flat(Infinity)//infinity is given bcs to determine the number of depth in the given array
console.log(rearranged_array)
console.log(Array.isArray('raki'))//returns false as the inpt is not an array
console.log(Array.from('sambhram'))//craeates the new array
console.log(Array.from({name:'dean'}))//returns the empty array as we haven't specified that either value or the key should be used to create the array
let score1=111,score2=222,score3=333;
const scr=Array.of(score1,score2,score3)
console.log(scr)
