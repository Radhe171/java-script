
// function greetMe(greet,Fullname ){
//     console.log("hello",Fullname)
//     greet();
// }

// function greet(){
//     console.log( "how's the day ");
// }

// greetMe(greet,"radheshyam");


// function solve( number){
//     return function(number){
//         return number*number;
//     }
// }

// let ans =solve(5);

// let finalAns=ans(9);

// console.log(finalAns);



let arr = [
    function(a,b){
        return a+b;

    }
    ,
    function(a){
        return a*a;

    },
    function(a,b){
        return a-b;
    }

        
]


let frist =arr[2];
let ans=frist(5,6);
console.log(ans);



