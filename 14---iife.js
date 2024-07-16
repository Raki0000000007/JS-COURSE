//*****************************IFFY*******************************/
//due to the pollution in the global scope we can use the IIFE

function call(){
    console.log('this is the noraml function')
}
call()//this is also an iife ,we called the function just after the declaration

//so the difference is we are goin to wrap the function with the paranthesis

(function call1(name){
    console.log(`this is the iife ${name}`)
})( ' ravi');//NAMMED IIFE

(() => {
    console.log('this is the iife')
}) ()//NORMAL IIFE (arraow function verison)
