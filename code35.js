class human{
    // properties

    age =18;
    hight="170cm";
    #wt=70;


    // behavior
    walking(){
        console.log("i am walking ");

    }

    running(){
        console.log("i am running " , this.#wt); /// here "this" use for access the priavte memmber in define block  

    }
}

let obj = new human();

console.log(obj.age);
console.log(obj.walking());

obj.walking();
obj.running();