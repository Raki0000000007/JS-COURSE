let str = 'Raki'
let rev=''

// for(let i=str.length; i--;i<0){
    for (let i = str.length-1 ; i >= 0; i--) {
    rev=rev+str[i]
}
console.log(rev)
console.log(str.length)



// //by one liner
// let g = [...str].reverse().join()
// console.log(g)//with comma
// let r = str.split('').reverse().join('')
// console.log(r)
