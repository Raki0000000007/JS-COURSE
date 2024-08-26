// function multiply(num){
//    return num*5
// }
// multiply.power = 2;
// console.log(multiply(6))                           
// console.log(multiply.power)                         //RETURN 2 AS THE POWER THAT WE ASSIGN IS 2
// console.log(multiply.prototype)                   //this will refer to the parent of parent .AS WE KNOW AT THE END NULL WILL BE THE FINAL POINT


function Product(Name,Price){
    this.Name=Name;
    this.Price=Price;
}

Product.prototype.Increase = function(){
    this.Price++;

}
Product.prototype.Print = function(){
    console.log(`the price of the ${this.Name} is ${this.Price}`)
}

const Product1= new Product('Chai',25)
const Product2= new Product('Coffee',15)

Product1.Print()
Product1.Print()















































































