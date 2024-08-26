///this is object literals


user = {
    name:'Raki',
    age:8,
    email:'gg@g.com' ,
    getdetails:function(){
        console.log(this.age)
    }
}
console.log(user.name)
console.log(user.getdetails())

//CONSTROCTOR FUNCTON

function Userdetails(username,salary,company){      
    this.username=username;                                       //this is like we asre creating the new variable       
    this.salary=salary;                                                 
    this.company=company;                                                   

    this.getdetails=function(){
       console.log(this.salary)
            }

    return this
}

// Useer1 = Userdetails('RAMESHA',5000,'hcl')                      
// Useer2 = Userdetails('JAVGA',1000,'CTS')
                                            //withput using the new keyword will override the new values with the new inputs that we have given values 
Useer1 = new Userdetails('RAMESHA',5000,'hcl')                      
Useer2 = new Userdetails('JAVGA',1000,'CTS')

console.log(Useer1)
console.log(Useer2)
                                        //with the new keyword willcreate the new object and will not overrride with the old one 