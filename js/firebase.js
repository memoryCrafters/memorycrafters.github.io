import { firebaseConfig } from './fbconfig.js';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

//// Email form ////

// Select form and email input
const form = document.querySelector('.form-inline');
const inputName = form.querySelector('#inputName')
const inputEmail = form.querySelector('#inputEmail');

// Function to push email to Firebase
function firebasePush(Name, Email) {
    // Push to database
    var emailPush = firebase.database().ref('Emails').push().set(
        {
            Name: Name.value,
            Email: Email.value
        }
    );
}

// Run function when form is submitted
if (form) {
    form.addEventListener('submit', function (evt) {
        
        evt.preventDefault();
        firebasePush(inputName, inputEmail);
        form.reset();

        const submitBtn = document.getElementById('submit-button');
        submitBtn.style.backgroundColor = 'rgba(95, 175, 126, 0.9)';
        submitBtn.style.borderRadius = '14px';
        submitBtn.textContent = 'Success!';

        setTimeout(function() {
            submitBtn.style.backgroundColor = '#77ADDD';
            submitBtn.textContent = 'Submit';
            submitBtn.style.borderRadius = '0px';
        }, 3000);
        
    })
}