const  student= {
     Name : " radhe",
     age :19,
     course:"B.tech"
};

let newStudent={...student};
newStudent.Name="raj";
console.log(student)
console.log(newStudent);