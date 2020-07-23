import { firebaseConfig } from './fbconfig.js';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//// Sign In / Create Account ////

// Function to sign in / create account through Firebase
function signIn(Cmnd, Email, Pswd) {

    // Check if create account or sign up
    switch (Cmnd) {

        case 'create':

            // Create user account
            firebase.auth().createUserWithEmailAndPassword(Email, Pswd)

                // Returns Promise
                .then(

                    // Success
                    function () {

                        console.log('Success!');
                        formCreate.reset();

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
                            //Go back to homepage
                            location.href = "index.html";
                        }, 3000);

                        

                    })

                // Catch error on failure
                .catch(

                    // Shows user the error
                    error => {

                        // Select error statement
                        var errorMsg = document.getElementById('error-message');

                        // Create variable for Error message content
                        var msgContent = error.message;

                        // Display error to user
                        errorMsg.textContent = msgContent;

                        console.log('Error creating account.');

                        // Change button style when submitted
                        const submitBtn = document.getElementById('submit-button');
                        submitBtn.style.backgroundColor = '#cc0000';
                        submitBtn.style.borderRadius = '14px';
                        submitBtn.textContent = 'Error';

                        setTimeout(function () {
                            submitBtn.style.backgroundColor = '#77ADDD';
                            submitBtn.textContent = 'Submit';
                            submitBtn.style.borderRadius = '0px';
                            errorMsg.textContent = '';
                        }, 8000);

                    }
                );
            break;

        case 'signIn':

            // Sign user in
            firebase.auth().signInWithEmailAndPassword(Email, Pswd)

                // Returns Promise
                .then(

                    // Success
                    function () {

                        console.log('Success!');
                        formLogin.reset();

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

                        // Go back to homepage
                        // window.location.href = "/";

                    })

                // Catch error on failure
                .catch(

                    // Shows user the error
                    error => {

                        // Select error statement
                        var errorMsg = document.getElementById('error-message');

                        // Create variable for Error message content
                        var msgContent = error.message;

                        // Display error to user
                        errorMsg.textContent = msgContent;

                        console.log('Error creating account.');

                        // Change button style when submitted
                        const submitBtn = document.getElementById('submit-button');
                        submitBtn.style.backgroundColor = '#cc0000';
                        submitBtn.style.borderRadius = '14px';
                        submitBtn.textContent = 'Error';

                        setTimeout(function () {
                            submitBtn.style.backgroundColor = '#77ADDD';
                            submitBtn.textContent = 'Submit';
                            submitBtn.style.borderRadius = '0px';
                            errorMsg.textContent = '';
                        }, 8000);

                    }
                );
            break;
    };
};

// Select create account form
const formCreate = document.getElementById('create');

// Select login form
const formLogin = document.getElementById('login');

// Function for submitting login/createAccount form
const auth = function (form, c) {

    form.addEventListener('submit', function (evt) {

        evt.preventDefault();

        // Select Name and Email from form
        const inputEmail = form.querySelector('#inputEmail').value;
        const inputPswd = form.querySelector('#inputPswd').value;

        signIn(c, inputEmail, inputPswd);

    })

};

// Run function when form is submitted
if (formLogin) { auth(formLogin, 'signIn') };
if (formCreate) { auth(formCreate, 'create') };