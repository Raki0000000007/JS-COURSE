function bike(){
    let bike_name='yamaha';

    function car(){
        let car_name='mini cooper';
        console.log(bike_name);
    }
   // console.log(car_name)//this will give us error bcs the inner function's paramenters can't be accessed outside of that function
    car()
}
bike()//we will gwt the output as the 'yamaha'

//we cannnot call the function before initializing it following is the exaples 

addone(1)//we will get the output for this as 2
function addone(no_1){
    console.log(no_1 + 1)
}
//we caled this function above the function definition

//but in case is we assign a function to the variable the we cannot able to call the function above its defenition like below

const nu=function add_two(no_2){
    console.log(no_2 + 2)
}
nu(7)//this will give the output 9 but in case if we call the function like below we will get he error

// nu(7) //we cannot call the variable before initializing it 
// const nu=function add_two(no_2){
//     console.log(no_2 + 2)
// }
