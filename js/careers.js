// Same as news-- Function to show embedded job listings

const strategy = document.getElementById('strategy');
const communications = document.getElementById('communications');
const productManagement = document.getElementById('productManagement');
const softwareIntern = document.getElementById('softwareIntern');
const softwareEngineer = document.getElementById('softwareEngineer');
const careerWrapper = document.getElementById('careerWrapper');

var businessListing = '<iframe src="https://drive.google.com/file/d/1MckynBICJAKhaKZR9rr1EvauYmbWSo_m/preview"></iframe>';
var communicationsListing = '<iframe src="https://drive.google.com/file/d/1k4pLXErjIH1Trucno3ZDiCCMohh7ML2i/preview"></iframe>';
var productListing = '<iframe src="https://drive.google.com/file/d/19QYTApE1xAflsPLKtGsNHHCiuZbDj9ck/preview"></iframe>';
var softwareInternListing = '<iframe src="https://drive.google.com/file/d/1PgrEN74S5pGfiS0NFBcvw2bKi6Vvnl4f/preview"></iframe>';
var softwareEngineerListing = '<iframe src="https://drive.google.com/file/d/1hlfSD_HU0g36hsK2aqOoQrVea9hPlys9/preview"></iframe>';

// Communications Listing Coming Soon

// Add listeners for each button

strategy.addEventListener('click', function () {
    careerWrapper.innerHTML = businessListing;
});

// communications.addEventListener('click', function () {
//     careerWrapper.innerHTML = communicationsListing;
// });

productManagement.addEventListener('click', function () {
    careerWrapper.innerHTML = productListing;
});

softwareIntern.addEventListener('click', function () {
    careerWrapper.innerHTML = softwareInternListing;
});

softwareEngineer.addEventListener('click', function () {
    careerWrapper.innerHTML = softwareEngineerListing;
});

