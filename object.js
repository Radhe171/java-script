// in js objects has key and values

var person={
    name: 'shyam' ,

    lastname:'sharma',

    age:20,
    ownecar:'gareeb'
};



// console.log(person)

// dot notation it is use for accesing the value of an abject

// console.log(person.name)

// bracket notation 
// console.log(person['age'])

var car={
    brand:'mercedes',

    model:['sedan','wegon','coupe'],
    color:['red','black'],
    topspeed:400

}
// console.log( 'model of car is : '+car.model[1])
// console.log('color of car : '+car.color[1])


var cap={
    fristName:'vijay',
    lastName:'sharma',
    age:'30',
    friends:['sourbh','mohit','akash','sahil'],
    isavenger:true,
    address:{
        state:'M.P.',
        city:{
            name:'JBP',
            pincode : 123456
        }
        
        

    }
}

console.log(cap.address.city.name)
cap.isavenger=false

// console.log(cap)

cap.movie=['age is just number','someone','finding']
// console.log(cap)
delete cap.friends
console.log(cap)