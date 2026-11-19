// let element= document.querySelector('#mydiv');// its using for only one 


// element.innerHTML; /// this is  using  for getting inner html 


// document.querySelectorAll('#mydiv') // its using for full element 

// element.innerhtml='somthing' // this is using for set inner html  
//  element.innertext // this is using for gettint text at a time which is shown in ui 
//  element.textContent // this method  using  for getting full code text 

//  let element2=document.createlement('p')
//  element2.textcontent="third para"

//  element.appendChild(element2) // this method  is using for adding element 
//  element.insertAdjacentElement("beforebegin",fahhhhhh)
let mydiv = document.querySelector('#mydiv');

let newElement = document.createElement('span');  

newElement.textContent = "STARTED";



mydiv.insertAdjacentElement('beforebegin', newElement); // its used for spacific position 
mydiv.insertAdjacentElement('beforeend', newElement);
mydiv.insertAdjacentElement('afterbegin', newElement);
mydiv.insertAdjacentElement('afterend', newElement);



mydiv.removeChild();  // this method is using for remove a element

