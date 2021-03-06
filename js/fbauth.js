// For the Product Demos Page //

const initApp = function () {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.

            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var uid = user.uid;
            var phoneNumber = user.phoneNumber;
            var providerData = user.providerData;
            /* user.getIdToken().then(function (accessToken) {
                //document.getElementById('sign-in-status').textContent = 'Signed in';
                //document.getElementById('sign-out').textContent = 'Sign out';
                document.getElementById('account-details').textContent = JSON.stringify({
                    displayName: displayName,
                    email: email,
                    emailVerified: emailVerified,
                    phoneNumber: phoneNumber,
                    photoURL: photoURL,
                    uid: uid,
                    accessToken: accessToken,
                    providerData: providerData
                }, null, '  '); 
            }); */

            /* Show and change Product Demos Inner HTML 
            to let signed in users access product demos */

            document.getElementById('demo-signIn').textContent = 'Demo our milestone and corporate products below.'
            document.getElementById('demos-wrapper').style.display = 'block';

            // Welcome User
            if (displayName != null) {
                const welcome = document.getElementById('welcome');
                welcome.innerHTML = `
                    <div>Welcome, ${displayName}</div>`;
            }

            const demos = document.getElementById('product-demos');
            demos.innerHTML = `
                <div class="m-3 mt-4"><a class="btn btn-primary" href="milestone.html" id="submit-button">Milestone</a></div>
                <div class="m-3"><a class="btn btn-primary" href="corporate.html" id="submit-button">Corporate</a></div>
            `;

            // Show Sign-out button
            document.getElementById('sign-out').style.display = 'inline-block';

            
        } else {

            // Show Sign-in button
            const signIn = document.getElementById('sign-in');
            if (signIn) {
                signIn.style.display = 'inline-block';
            }

            // User is signed out.
            //document.getElementById('sign-in-status').textContent = 'Signed out';
            //document.getElementById('sign-in').textContent = 'Sign in';
            //document.getElementById('account-details').textContent = 'null';

            // Milestone and Corporate Demo Pages //
            // Hide demos if user accesses page without being signed in
            const pDemo = document.getElementById('p-demo')
            if (pDemo) {
                pDemo.innerHTML = `
                <p>Please <a href="/login.html">Log in</a> to access product demos.</p>
            `;
            };

        }
    }, function (error) {
        console.log(error);
    });
};

window.addEventListener('load', function () {
    initApp();
});

const signOut = document.getElementById('sign-out');
if (signOut) {
    signOut.addEventListener('click', function () {
        firebase.auth().signOut().then(function () {
            signOut.style.display = 'none';
            location.reload();
        }, function (error) {
            console.error('Sign Out Error', error);
        });
    })
};