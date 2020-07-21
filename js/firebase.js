import { firebaseConfig } from './fbconfig.js';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

//// Email form ////

// Select form
const form = document.querySelector('.form-inline');

// Function to push email to Firebase
function firebasePush(Name, Email) {
    // Push to database
    database.ref('Emails').push().set(
        {
            Name: Name.value,
            Email: Email.value
        }

    // Returns Promise
    ).then(

        // Success
        function () {
            console.log('Success!');
            form.reset();

            // Change button style when submitted
            const submitBtn = document.getElementById('submit-button');
            submitBtn.style.backgroundColor = 'rgba(95, 175, 126, 0.9)';
            submitBtn.style.borderRadius = '14px';
            submitBtn.textContent = 'Success!';

            // TODO: make into function
            setTimeout(function () {
                submitBtn.style.backgroundColor = '#77ADDD';
                submitBtn.textContent = 'Submit';
                submitBtn.style.borderRadius = '0px';
            }, 3000);
        },

        // Failure
        function () {
            console.log('Error sending data.')
            form.reset();

            // Change button style when submitted
            const submitBtn = document.getElementById('submit-button');
            submitBtn.style.backgroundColor = '#cc0000';
            submitBtn.style.borderRadius = '14px';
            submitBtn.textContent = 'Error';

            setTimeout(function () {
                submitBtn.style.backgroundColor = '#77ADDD';
                submitBtn.textContent = 'Submit';
                submitBtn.style.borderRadius = '0px';
            }, 3000);
        });
};

// Run function when form is submitted
if (form) {
    // Select Name and Email from form
    const inputName = form.querySelector('#inputName');
    const inputEmail = form.querySelector('#inputEmail');

    form.addEventListener('submit', function (evt) {

        evt.preventDefault();
        firebasePush(inputName, inputEmail);
        form.reset();

    })
};