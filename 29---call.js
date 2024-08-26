//call is used to set the properties of 1 object to another where we pass that as the referenxce and the object which it its recieving the properties will have the full access of the object that is providiung the properties(i.e, parent object )

function setUsername(username){
    this.username=username                                  //here we set the valuje of the username 
}
function creatUser(username,height,weight){
    setUsername.call(this,username)                         
                                                        //here we will get the reference of the previous object that we are getting the properties ,so the call in this line will jave the reference of the old object and will getb the details of the username property and the values of that 
    this.height=height  
    this.weight=weight
}
let U1=new creatUser('raju',3.6,44.5)
console.log(U1)
