//when we create the object through the constructor then it is called as the singleton object
//in case if we create the objects through the literals then it is not a singleton object

//objects using the literals

const r=Symbol('icon?')
const usr={
    name:'ronaldo',
    age:37,
    [r]:'yes',
    isPlaying:true,
    place:'portu',
    'car owned':'lambo',
    height:6.1
}
console.log(usr['name']); //best practise to log the outputs
console.log(usr.name)//we can use this but in case if we define the key as a string(like car owned)then we can't able to use this as a log statement
console.log(usr.car owned)//here is the example as we define the key as a string so when we try to log then we can't log
console.log(usr['car owned'])
console.log(usr[r])

//freeze
//when we want to stick to the value and don't want to change  in upcomming re initialization we can use freeze

usr.place='INDIA';
Object.freeze(usr)
usr.place='pak'
console.log([usr]) //even though we changed the place value to the pak the previos value INDIA is freezed, so we can make changes to whatever other parameters and aftert hat if we freeze then we can't able to change further

usr.greetings=function(){
    console.log('hi')
}
console.log(usr.greetings())

//we created a function just to print hi

usr.greetingstwo=function(){
    console.log(`hello ${this.name}`)
}
console.log(usr.greetingstwo())
//we created a function and using this operator we got the access to the properties that we are having in the object