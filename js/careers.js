// Same as news-- Function to show embedded job listings

const strategy = document.getElementById('strategy');
const salesLeader = document.getElementById('salesLeader');
const softwareEngineer = document.getElementById('softwareEngineer');
const productManagement = document.getElementById('productManagement');
const salesIntern = document.getElementById('salesIntern');
const softwareIntern = document.getElementById('softwareIntern');

const careerWrapper = document.getElementById('careerWrapper');

// Job Listings
var businessListing = {
    iframe : '<iframe src="https://drive.google.com/file/d/1MckynBICJAKhaKZR9rr1EvauYmbWSo_m/preview"></iframe>',
    link : 'https://drive.google.com/file/d/1MckynBICJAKhaKZR9rr1EvauYmbWSo_m/view'
};

var salesLeaderListing = {
    iframe : '<iframe src="https://drive.google.com/file/d/1OIxJSXxQTTES6RVe-Eke0V4hbbrnZm30/preview"></iframe>',
    link : 'https://drive.google.com/file/d/1OIxJSXxQTTES6RVe-Eke0V4hbbrnZm30/view'
};

var softwareEngineerListing = {
    iframe : '<iframe src="https://drive.google.com/file/d/1hlfSD_HU0g36hsK2aqOoQrVea9hPlys9/preview"></iframe>',
    link : 'https://drive.google.com/file/d/1hlfSD_HU0g36hsK2aqOoQrVea9hPlys9/view'
};

var productInternListing = {
    iframe : '<iframe src="https://drive.google.com/file/d/19QYTApE1xAflsPLKtGsNHHCiuZbDj9ck/preview"></iframe>',
    link : 'https://drive.google.com/file/d/19QYTApE1xAflsPLKtGsNHHCiuZbDj9ck/view'
};

var salesInternListing = {
    iframe : '<iframe src="https://drive.google.com/file/d/1ABFFnEC2G6fSsXezr4nfw4BGF5Kc0nAe/preview"></iframe>',
    link : 'https://drive.google.com/file/d/1ABFFnEC2G6fSsXezr4nfw4BGF5Kc0nAe/view'
};

var softwareInternListing = {
    iframe : '<iframe src="https://drive.google.com/file/d/1PgrEN74S5pGfiS0NFBcvw2bKi6Vvnl4f/preview"></iframe>',
    link : 'https://drive.google.com/file/d/1PgrEN74S5pGfiS0NFBcvw2bKi6Vvnl4f/view'
};

// Function to hide embedded PDF on small devices (landscape/portrait phones)
const btnFunction = function (element, listing) {

    if (window.innerWidth < 768) {
        careerWrapper.style.display = 'none';
        element.onclick = function () {
            window.open(listing.link);
        };
    }

    else {
        careerWrapper.style.display = 'block';
        element.onclick = function () {
            careerWrapper.innerHTML = listing.iframe;
        };
    };

};

function runListings() {

    btnFunction(strategy, businessListing);
    btnFunction(salesLeader, salesLeaderListing);
    btnFunction(softwareEngineer, softwareEngineerListing);
    btnFunction(productManagement, productInternListing);
    btnFunction(salesIntern, salesInternListing);
    btnFunction(softwareIntern, softwareInternListing);

};

// Hide embedded PDF if on small screen and instead pop-up preview. //

// Initialize on page load
if (window.innerWidth < 768) { careerWrapper.style.display = 'none' };
runListings();

// When resizing 
window.addEventListener('resize', function () {

    runListings();

});