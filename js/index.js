//Get the references to the active page-elements
let fm = document.getElementById('contact');
let fn = document.getElementById('fullname');
let email = document.getElementById('email');
let message= document.getElementById('message');
let submit = document.getElementById('submit-button');


let pattern = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/

 function collectData() {}

 submit.addEventListener ('click' , collectData);



function formValidator(event) {
    // preventing default behaviour of HTML form on submit event
     event.preventDefault();

    // start with these 2 empty buckets at the beginning
     let errors = [];
     let data = {};


    // validation for name
    if (fn.value !== '') {
        data.Name = fn.value;
    } else {
        errors.push('Please enter your name!');
    }

    // validation for email
    if (email.value !=='') {

        if (pattern.test(email.value)) {
           data.email = email.value;
        }  else {
           errors.push('Email is invalid');
        }
    } else {
        errors.push(`User email is empty.`);
    }


     // validation for message
     if (message.value !== '') {
        data.details = message.value;
    } else {
        errors.push('Please enter your message!');
    }
 
    //Feedbacks/Errors
       // check if error array is empty. If so, print in console data object,
    // otherwise print in console errors array 
       if(errors.length > 0) {
          console.log(errors);
       } else {
           console.log(data);
      fm.reset();

       } 
 
    
}

fm.addEventListener('submit', formValidator);
