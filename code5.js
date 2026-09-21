let arr=[10,20,30];
console.log(" arr is befor ",arr)

 let ansArray=arr.map((number) =>{
    return number*number ;
})
console.log( " arr after "+ ansArray);

arr.map((number)=> {
    console.log(number)
})
arr.map((number,index) => {
    console.log(number+index)

})

