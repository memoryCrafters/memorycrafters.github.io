import { firebaseConfig } from './fbconfig.js';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth(); 

//// Email form ////

// Select form and email input
const form = document.querySelector('.form-inline');
const inputName = form.querySelector('#inputName')
const inputEmail = form.querySelector('#inputEmail');

// Function to push email to Firebase
function firebasePush(Name, Email) {
    //push itself
    var emailPush = firebase.database().ref('Emails').push().set(
        {
            Name: Name.value,
            Email: Email.value
        }
    );
}

// Run function on submit
if (form) {
    form.addEventListener('submit', function (evt) {
        //location.reload();
        //evt.preventDefault();
        firebasePush(inputName, inputEmail);

        // Alert if everything runs.
        return alert('Success!');
    })
}

//// Firebase Auth ////
