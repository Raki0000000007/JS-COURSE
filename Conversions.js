let score=33;
console.log(typeof score)

let score2='33abc'
console.log(typeof score2);

let reassign=Number(score2)


console.log(typeof reassign)
console.log(reassign)

// will get NaN but still if we log reassign we will gwt this as a number
// when we conver the number is will conver to number as it is anumber itself but incase if we convert string to the number it will give asa NAN
// false=>0 and true=>1

let number=1;
let isbooleanconvert = Boolean(1)
console.log(isbooleanconvert);
console.log(typeof isbooleanconvert)

// this converts number into boolean
// 0 and empty sting (r='')gives false
// 1 and defined string (r='hgffg') gives true

let t='raki';
let tt=Number(t)
console.log(tt)
console.log(typeof tt)
// nan
// number

//*******************************OPERATIONS******************************* */
console.log(7+7)
console.log(7-7)
console.log(7*7)
console.log(7/7)
console.log(2*3)
console.log(17%7)

let fname='rakesh'
let lname=' c'
console.log(fname+lname)

console.log("1"+2)
console.log("1"+'2')
console.log(1+2)
console.log("1"+2+3)
console.log(1+2+'3')