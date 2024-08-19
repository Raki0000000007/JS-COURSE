//using seperate variable 


let promiseOne = new Promise(function(resolve,reject){      //new promise is craeted and resolve if the data recived fromthe api,and reject for not getting the info
    setTimeout(function(){
        console.log('Executing 1st promise')
        resolve()                                           //it indicates to then in 8th line that information got so we can resolve
    },1000)
})

promiseOne.then(function(){                                 //once after the resolve is indicated we will execute this and 
                                                                            //promise will be completed
    console.log('We are completed the 1st promoise')
}
)

//not using varibale 

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Executing 2nd promise')
        resolve()
    },1000)
}).then(function(){
    console.log('We are completed the 2nd promoise')
})

both the ways are correct

new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({user:'Me',email:'me@gmail.com'})
    },1000)
}).then(function(data){
    console.log(data)
})

let promiseThree = new Promise(function(resolve,reject){     
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:'R',email:'gg@g.com'})
        }
        else{
            reject('Error,something went wrong')
        }
    },1000)
})

promiseThree.then(function(user){                                 
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log('we got or maynot ')
})

let promiseFour = new Promise(function(resolve,reject){     
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:'M',email:'MM@m.com'})
        }
        else{
            reject('Error,something went wrong')
        }
    },1000)
})

async function fifthPromise(){
    try {
        let response = await promiseFour;
        console.log(promiseFour)
    } catch (error) {
        console.log('E',error)
    }
}
fifthPromise()


async function getallusers(){
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log('E',error)
  }
}
getallusers()
