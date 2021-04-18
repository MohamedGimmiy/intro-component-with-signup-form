// Todo validation

let btnSubmit = document.querySelector('#submit');

let fname = document.querySelector('#fname');
let lname = document.querySelector('#lname');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let errors = document.querySelectorAll('.error');
let inputs = document.querySelectorAll('input');
let errors_icon = document.querySelectorAll('.input-group-text');


// border-right-0 border-danger
btnSubmit.addEventListener('click',(e)=>{
    messages = [];
    if(fname.value === '' || fname.value === null){
        messages.push('First Name cannot be empty');
        addClasses(0);
    }
    else{
        // true to be submitted
        removeClasses(0);
    }

    if(lname.value === '' || lname.value === null){
        messages.push('Last Name cannot be empty');
        addClasses(1);

    } else{
        // true to be submitted
        removeClasses(1);

    }

    if(email.value === '' || email.value === null){
        messages.push('Email cannot be empty');
        addClasses(2);
    } else {
        // true to be submitted
        removeClasses(2);
    }

    if(password.value === '' || password.value === null){
        messages.push('password cannot be empty');
        addClasses(3);
    } else {
        // true to be submitted
        removeClasses(3);
    }

    if(messages.filter(m => m === '').length !== 4){
        // not valid
        console.log("not submitted")
            e.preventDefault();
    } else{
        console.log("submitted");
        // submit your form
        e.preventDefault();
    }
});


/* ----------------- Add classes --------------- */
function addClasses(number){
    errors[number].innerHTML = messages[number];
    inputs[number].classList.add('border-right-0','border-danger');
    errors_icon[number].classList.remove('d-none');
}

/* ---------------- Remove classes ------------- */

function removeClasses(number){
    messages[number] = '';
    errors[number].innerHTML='';
    inputs[number].classList.remove('border-right-0', 'border-danger');
    errors_icon[number].classList.add('d-none');
}
