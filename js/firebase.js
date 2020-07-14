// Firebase configuration


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Select form and email input
const form = document.querySelector('.form-inline');
const inputEmail = form.querySelector('#inputEmail');

// Function to push email to Firebase
function firebasePush(input) {
    //push itself
    var emailPush = firebase.database().ref('Emails').push().set(
        {
            Email: input.value
        }
    );
}

// Run function on submit
if (form) {
    form.addEventListener('submit', function (evt) {
        location.reload();
        evt.preventDefault();
        firebasePush(inputEmail);
        
        // Alert if everything runs.
        return alert('Data Successfully Sent to Database');
    })
}

