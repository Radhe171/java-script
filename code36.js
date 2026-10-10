class human{
    // properties

    age =18;
    hight="170cm";
    #wt=70;


    // behavior
    walking(){
        console.log("i am walking ");

    }




    get fetchweight(){
        return this.#wt;  // getter use for geting value;
    }

    set modiftweight( val){
        this.#wt=val;

    }
    
    running(){
        console.log("i am running " , this.#wt); /// here "this" use for access the priavte memmber in define block  

    }

     
}

let obj = new human(5);

console.log(obj.age);
console.log(obj.walking());

obj.walking();
obj.running();
obj.modiftweight=23;

console.log(obj.fetchweight);






// getter &setter functions 
