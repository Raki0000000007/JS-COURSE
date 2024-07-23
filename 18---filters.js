const digits=[1,2,3,4,5,6,7,8,9,10]
const newDigits=digits.filter( (display)=>(display>5))  //if we define the callback like () we dont need to return but
console.log(newDigits)

const newDigits2=digits.filter( display => {
    display >5                                 //if we define a function inside the scope then we need to return or else we will get empty array
})

console.log(newDigits2)


const data=[
    {role:'Batsmen', Team:'IND',age:27,Ranking:15},
    {role:'Bowler', Team:'SA',age:29,Ranking:54},
    {role:'Allrounder', Team:'ENG',age:21,Ranking:95},
    {role:'Keeper', Team:'IND',age:25,Ranking:85},
    {role:'Batsmen', Team:'SL',age:19,Ranking:5},
    {role:'Bowler', Team:'India',age:33,Ranking:1},
]
//const playerdata=[];

const playerinfo=data.filter( (output)=>( output.Team === 'IND'))
 console.log(playerinfo)


//  //*****************MAP***********************/

  const mynum=[1,2,3,4,5,6,7,8,9,10]
     const exe=mynum.map( (numb)=> ( numb+10))
  console.log(exe)


    // IN ALL THE CALL BACK CASES WE NEED TO MAKE SURE HOW WE ARE DEFINING THW FUNCTION IF WE DEFINE USING () THEN NO NEED TO RETURN OR
    // IF WE DEFINE USING {} THEN RETURN KETWORD IS MANDATORY
    // but in the for each just we need to define call abck using {}
    // MAP EXECUTES THE ELEMENTS IN THE ARRAY OR OTHERS
    // FILTERS WILL PLAY AROUND TRUE OR FALSE CONDITIONS


        const exe2=mynum.forEach( (numb2) =>{
           // console.log(numb2)
        })
       // console.log(exe2)

        //**********************CHAINING*****************/

        const exe2=mynum
                        .map((num)=>num *10 )//this will multiply the numbers by 10
                        .map((num)=>(num +1))//this will add 1 to each and eveey element that have been already multiplied by 10 previosly
                        .filter((num)=>(num >50));
console.log(exe2)



//**************REDUCE*******************/

const even=[2,4,6,8,10]
const final=even.reduce(function (acc,currval){                    //this will take the accumulator value nd the current valus i.e, array values
    console.log(`the acc is ${acc} and the currval is ${currval}`)
    return acc + currval    
},1)                                                              //this will give the accumuluator a inintial value
console.log(final)
