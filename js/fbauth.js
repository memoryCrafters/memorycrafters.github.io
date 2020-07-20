// Todo: Enable Facebook/Phone authentication


// FirebaseUI config.
var uiConfig = {
    signInSuccessUrl: 'index.html',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

const initApp = function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.

            // Show Sign-out button
            document.getElementById('sign-out').style.display = 'block';

            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var phoneNumber = user.phoneNumber;
            var providerData = user.providerData;
            user.getIdToken().then(function (accessToken) {
                //document.getElementById('sign-in-status').textContent = 'Signed in';
                //document.getElementById('sign-out').textContent = 'Sign out';
                /*document.getElementById('account-details').textContent = JSON.stringify({
                    displayName: displayName,
                    email: email,
                    emailVerified: emailVerified,
                    phoneNumber: phoneNumber,
                    photoURL: photoURL,
                    uid: uid,
                    accessToken: accessToken,
                    providerData: providerData
                }, null, '  ');
                */
            });

            // Welcome User
            const welcome = document.getElementById('welcome');
            welcome.innerHTML = `Welcome, ${displayName}`;

        } else {
            // Show Sign-in button
            const signIn = document.getElementById('sign-in');
            if (signIn) {
                signIn.style.display = 'block';
            }
            
            // User is signed out.
            //document.getElementById('sign-in-status').textContent = 'Signed out';
            //document.getElementById('sign-in').textContent = 'Sign in';
            //document.getElementById('account-details').textContent = 'null';

        }
    }, function (error) {
        console.log(error);
    });
};

window.addEventListener('load', function () {
    initApp();
});

const signOut = document.getElementById('sign-out');
signOut.addEventListener('click', function () {
    firebase.auth().signOut().then(function () {
        signOut.style.display = 'none';
        location.reload();
    }, function (error) {
        console.error('Sign Out Error', error);
    });
})

