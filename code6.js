// let arr=[10,23,42,4,32,45,456]
//  let evenArray=arr.filter((number )=> {
//     if (number %2==0){
//         return true;
//     }
//     else return false;
// })
// console.log(evenArray)

// let oddArray =arr.filter((number)=>{
//     if ( number%2==0){
//         return false ;

//     }
//     else return true;
// })
// console.log(oddArray);



let arr=['radhe','yupp',12,45,67,88,'hello','fahhh'];
  let ansfahh=arr.filter((value)=>{
    if(typeof value== 'string'){
        return true ;

    }else 
        {
            return false ;}

})
console.log(ansfahh)
let ansnum=arr.filter((value)=>{
    if(typeof value== 'number'){
        return true ;

    }else 
        {
            return false ;}

})
console.log(ansnum);