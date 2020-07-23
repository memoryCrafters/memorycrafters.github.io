// Create Account //

// Function to create account through Firebase
function createAct(Email, Pswd) {

    // Create user with input email and password
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
                }, 3000);

            })

        // Failure
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

            });
};


// Select create account form
const formCreate = document.getElementById('create');

// Select error statement
var errorMsg = document.getElementById('error-message');

if (formCreate) {

    formCreate.addEventListener('submit', function (evt) {

        // Prevent browser from refreshing
        evt.preventDefault();

        // Select Name and Email from form
        const inputEmail = formCreate.querySelector('#inputEmail').value;
        const inputPswd = formCreate.querySelector('#inputPswd').value;

        createAct(inputEmail, inputPswd);

    })
};

