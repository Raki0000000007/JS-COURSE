//if
let age = 18;
if(age > 17){//checks the condition anf enters the loop to execute the code 
    console.log('elegible to vote')
}
//if else
if ( 10>11){
    console.log('the condition is false');//this will execute if the condition is true 
}else{
    console.log('the condition is false')//this will execute if the conditon is false   
 
}
   //here also the scopes matter 
    if (3>2){
        let name='gg';
        console.log(name)
    }//so here the code is executed as the condition is true and we called the log statement inside the scope where it is defined

    // if (3>2){
    //     let name='gg';
       
    // }
    // console.log(name)//here we get he error as the name is defined in the scope of if condition and we are logging it outside the scope

    //ifelse

    let marks=87;
    if(marks < 25){
        console.log('fail')
    }
    else if(marks < 45){
        console.log('first class')
    }
    else if(marks < 60){
        console.log('second class')
    }
    else{
        console.log('distinction')
    }//falls throught the number of conditons and executes the one which is true

    //switch
    let month=15;
    switch(month){
        case(1):
        console.log('january')
        break;
    
        case(2):
        console.log('february')
        break;
    
        case(3):
        console.log('march')
        break;
    
        case(4):
        console.log('april')
        break;
    
        case(5):
        console.log('may')
        break;
        default:
            console.log('no month fou d')
    }//if noncases is matched then the default is executed 
    //the break statement will not execute the below lines once the conditon or the case  is matched ,we can also use the continue statement to skip the current itiration


    //truthy and falsy values
    const company='hcl'
    if (company){
        console.log(company)//this is an exaple of truthy value. Here the condition or the code will check the condition that the string has something stored in this if stored it will be considered as the truthy value even though the empty string is considered as the flasy value
    }//

    //falsy values are----> false, null 0, undefined, -0 , bigint 0n, nan, ''
    //truthy values are---> except above all the other values are truthy value and 'false', '0', {}, [], function(){}

    //AND OR
    if (2==2 && 1== 1){
        console.log('conditions are correct')
    }
    else{
        console.log('conditions are false')
    }//to enter and execute the loop all the conditions must be true 

    if (2==2 || 2== 1){
        console.log('conditions are correct')
    }
    else{
        console.log('conditions are false')
    }//to enter and execute the loop anyone of the conditions must be true 

    //ternaty operator
    let even=2;
    even >3 ? console.log('true'):console.log('false');
