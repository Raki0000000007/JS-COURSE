//while
//unlike the for loop the whilw loop will chwck the condition and executes the code but in different way

let count=0;
while(count<10){
  //  console.log(count)
    count++;
}//in the while loop the increament and initialaization will be in the different places but the work remains the same 

const arre=[2,4,6,8]
let index=0;
while(index < arre.length){
   console.log(arre[index])
    index++;
}

//the intention remains the same but the way is different

//do while
//in this we are executing the console statement ateash once qand it checks the condition later
let coun=0;
do{
  //  console.log(coun)
    coun++;
}while(coun<10);



//for of loop
let numbers=[1,2,3,4,5,6,7]
for (const num of numbers) {
    console.log(num)
}
//unlike in the other loops we dont need to mention the condition and increament etc

let Name='sambhram'
for (const char of Name) {
    console.log(`each character of Name is ${char}`)
}

//map
 const map=new Map();
 map.set('IN','India')
 map.set('FR','France')
 map.set('RS','Russia')
 map.set('BAN','Bangladesh')
 map.set('SL','Sri Lanka')

//  for (const iterator of map) {
//     console.log(iterator)
//  }//so this will give the ou=tput in the array manner so when we need the output int he key value pair we use the below method

for (const [Key,value] of map) {
        console.log(Key, ':-', value)
      }//so we wrapped the key and the value pair and will print the output in the same manner

      const obj={
            name:'w vhs',
            age:44
      }
    //   for (const iterator of obj) {
    //     console.log(iterator)
    //   }//we cannot loop the objects using for of it is not iteratable
      //but there are different ways to do that


      //FOR IN----->ARRAYS AND OBJECTS
      //FOR OF----->ARRAYS AND MAPS
      //FOR EACH -->speacially for ARRAYS
      //we can use both the baove loops in the array but need to be awarevof the consoling the statement in each of the loops we will get the keys and the values for the different consoling statement 

      const shortcut={
        IN:'India',
        'RS':'Russia'
      }
     for( const key in shortcut){
        console.log(`the ${key} is the shortcut for ${shortcut[key]}`)
     }//FOR in is used in the objects to iterate the value

//FOR EACH

const programming=['js','java','cpp','c']
programming.forEach( function(val){//we use callback function to loop through the array and gave the val varaible to loop through the array
    console.log(val)
})

programming.forEach( (val,index,programming) => {//for each will have access to the index,elements and the array that we have defined
    console.log(val,index,programming)
})

const details=[
    {model:'a3',
     price:'2m'
    },
    {model:'a5',
        price:'5m'
       },
       {model:'a7',
        price:'7m'
       }
]//we have 3 objects inside the array
//using the for each loop we are going to get access for the elements inside the array


details.forEach( (data)=>{
    console.log(data.price)
} )//we will have the options to get the access to the elements inside the array using the dot operator and the elements we needed
