    //***************************DATES and TIME*****************************/

    // THE DATE PROPERTY IA AN OBJECT 

    let date=new Date();
    console.log(date)//gives the present date and time
    console.log(date.toString())//converts the date to string format
    console.log(date.toISOString())//a date and time format used internationally to express a numeric calendar date 
    console.log(date.toJSON())//in json format
    console.log(date.toLocaleDateString())//gives  the date 
    console.log(date.toLocaleString())//gives both the date and time 
    console.log(date.toLocaleTimeString())//gives both the time 
    
    console.log(typeof(date))//returns object as we creted the instance 

    let createdate = new Date(1999,3,13)
    console.log(createdate.toDateString())///returns the day and the date of the given input and the months index will start from 1 henve 3 is giving as the april
    console.log(createdate.getTime())//returns the milliseconds from 1999,3,13 to now
    let timestamp=Date.now()
    console.log(timestamp)//returns the milliseconds from 1970(this is the reference that the javascript takes as the start time) to now

    let presentdate=new Date(1998,3,13,7,37,15);
    // console.log(presentdate.toLocaleString())
    console.log(presentdate.getDay())
    console.log(presentdate.getMinutes())
    console.log(presentdate.getSeconds())
    console.log(presentdate.toLocaleDateString('default',{
        timeZoneName:'long'
    }
       
    ))
