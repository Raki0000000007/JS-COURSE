
//so sometimes if we want to hide th epassword or the information of some peroperties when other tries to access so we can use getter and setter and make them difficult to access so that they cannot try to obtain 
class Admin{
    constructor(name,password){
        this.name=name;
        this.password=password;
    }
    get password(){
        return `${this._password}Shiv`.toUpperCase()         
                                                                //adding shiv just to make sure difficult to access to others and other properties like uppercase and others can be added
    }
    set password(value){
        this._password=value
    }
                                                //we will get error if we use password here in getter and setter as the constructor and the getter and setter tries to set the values to the varibale.
                                                //hence defineing the new varibale and assigning the value to make sure we are trying to set the values using getter and setter
}
let adm=new Admin('nadar','abc')
console.log(adm.password)





//***************************************LEXICAL SCOPING **********************************
//gettingt he access of the varibales and the functions of the parent function inside the inner function 

function Parent(){
    let username = 'Rakesh'
    function clild(){
        console.log(username)
    }
    clild()
}
Parent()
                                            //we will gett he output as Rakesh bcs as the variable declared int he paent function and accseesing in the clild called lexical scoping ,if in case we try to access the variable outside the function as below we will get error
// console.log(username)                                            
