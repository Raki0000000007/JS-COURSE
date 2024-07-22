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
