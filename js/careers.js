// Same as news-- Function to show embedded job listings

const strategy = document.getElementById('strategy');
const communications = document.getElementById('communications');
const productManagement = document.getElementById('productManagement');
const software = document.getElementById('software');
const careerWrapper = document.getElementById('careerWrapper');

var strategyListing = '<iframe src="https://drive.google.com/file/d/1MckynBICJAKhaKZR9rr1EvauYmbWSo_m/preview"></iframe>';
var softwareListing = '<iframe src="https://drive.google.com/file/d/1k4pLXErjIH1Trucno3ZDiCCMohh7ML2i/preview"></iframe>';

// PM and Communications Listings Coming Soon

// Add listeners for each button

strategy.addEventListener('click', function () {
    careerWrapper.innerHTML = strategyListing;
});

// communications.addEventListener('click', function () {
//     careerWrapper.innerHTML = mayNews;
// });

// productManagement.addEventListener('click', function () {
//     careerWrapper.innerHTML = mayNews;
// });

software.addEventListener('click', function () {
    careerWrapper.innerHTML = softwareListing;
});

