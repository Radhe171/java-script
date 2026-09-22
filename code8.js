// let arr=[10,30,92,33,45]

// arr.forEach((value,index)=>{
//     console.log("value",value,"index",index);
// // })



// for( let index =0;index<arr.length;index++){
//     console.log(arr[index],"on index ",index);
   
// }

// let obj={
//     name:"radhe",
//     age:20,
//     wiegth:65,
//     height:"5,11"


// };

// for( let key in obj){
//     console.log(key,":",obj[key])
// }


let arr=[10,20,30,50,60]
//  for ( let val of arr){
//     console.log(val)
//  }


//  let namee ="radheshyam ";
//  for(let val of namee){
//     console.log(val)

//  }


//  function getSum(arr){
//     let len = arr.length;
//     let sum=0;
//     for ( let i=0;i<len;i++){
//         sum=sum+arr[i];
//     }
//     return sum;
//  }


 function getSum(arr){
    
    let sum=0;
   arr.forEach((value)=>{
    sum=sum+value;
   })
    return sum;
 }

 let answer = getSum(arr);
 console.log(answer);

 

