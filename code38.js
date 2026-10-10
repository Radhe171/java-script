function sayhello(say="chal hatt "){     // default value:- jab ham value define nhi karte tb function ki jo givan value hai vo call hoti hai ise default value kahte hAi 
    console.log("namste duniya:- ",say);

}

// sayhello("kese hai aapp sb ")
// sayhello();



// function myName( Fname=" radhe ",Lname="borban "){
// console.log("My name is :=",Fname,Lname);
// }
// myName("radheshyam","borban");

// myName();


// function myName( Fname=" radhe ",Lname=Fname.toUpperCase()){
// console.log("My name is :=",Fname,Lname);
// }
// myName("radheshyam","borban");

// myName();





// function solve( value={age:15,wt:30}){
//     console.log(" HEllo ji :=",value)
// }

// solve();
// solve(null);
// solve(undefined);


function utility(ans=sayhello()){
    console.log(ans);
}
utility();