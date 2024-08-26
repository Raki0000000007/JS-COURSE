myArray=['superman','spiderman']

myObj={
    Model:'S22',
    company:'Samsung',
    Price:23000,
    display:function(){
        console.log(`the peice of the ${this.Model} of ${this.company} mobile is ${this.Price}`)
    }
}

// console.log(myObj.display())
Object.prototype.compitatator=function(){
    console.log('The compitator is Apple')
}

// myArray.compitatator()
myObj.compitatator()

                               //we have created the method at the object level so if we call using array that we Have defined or with the object that we defined, it will be inject to both so when we call the perticular array or object we will get the functioin that we defined (THIS WILL HAPPEN WITHE STRING ALSO IF WE DEFINE STRING
                   //Functions   

                   //array    -----------------------------> Objects----------->NULL
                
                   //string

//IF WE CREATE THE FUNCTION ON THE ARRAY LEVEL WE CANNOT INJECT TO THE OBJECT OR THE STRING IT IS FIXED TO THE ARRAY LEVEL AS IT IS PERTICULARLY DEFINED FOR THE ARRAYH ITSELF ACCORDING TO THE ABOVE DIAGRAM

Array.prototype.Hey=function(){
    console.log('Array level function')
}
myArray.Hey()



//WE ARE CREATING THE FUNCTION THAT WILL REMOVE THE EXTRASPACES WITHIN THE STRING 
let Bikename='Mt25       '
// console.log(Bikename.length)                        length will be 11 so we need to remove the extra spaces


String.prototype.Removeextraspaces=function(){
    
    console.log(`the truelength of the ${this.trim()} is ${this.trim().length}  `)
    // console.log(this)
}

Bikename.Removeextraspaces()






















































