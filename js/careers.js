// Same as news-- Function to show embedded job listings

const strategy = document.getElementById('strategy');
const productManagement = document.getElementById('productManagement');
const softwareIntern = document.getElementById('softwareIntern');
const softwareEngineer = document.getElementById('softwareEngineer');

const careerWrapper = document.getElementById('careerWrapper');

// Job Listings
var businessListing = {
    iframe : '<iframe src="https://drive.google.com/file/d/1MckynBICJAKhaKZR9rr1EvauYmbWSo_m/preview"></iframe>',
    link : 'https://drive.google.com/file/d/1MckynBICJAKhaKZR9rr1EvauYmbWSo_m/view'
};

var softwareEngineerListing = {
    iframe : '<iframe src="https://drive.google.com/file/d/1hlfSD_HU0g36hsK2aqOoQrVea9hPlys9/preview"></iframe>',
    link : 'https://drive.google.com/file/d/1hlfSD_HU0g36hsK2aqOoQrVea9hPlys9/view'
};

var productInternListing = {
    iframe : '<iframe src="https://drive.google.com/file/d/19QYTApE1xAflsPLKtGsNHHCiuZbDj9ck/preview"></iframe>',
    link : 'https://drive.google.com/file/d/19QYTApE1xAflsPLKtGsNHHCiuZbDj9ck/view'
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

// Hide embedded PDF if on small screen and instead pop-up preview. //

// Initialize on page load
if (window.innerWidth < 768) { careerWrapper.style.display = 'none' };

btnFunction(strategy, businessListing);
btnFunction(softwareEngineer, softwareEngineerListing);
btnFunction(productManagement, productInternListing);
btnFunction(softwareIntern, softwareInternListing);

// When resizing 
window.addEventListener('resize', function () {

    btnFunction(strategy, businessListing);
    btnFunction(softwareEngineer, softwareEngineerListing);
    btnFunction(productManagement, productInternListing);
    btnFunction(softwareIntern, softwareInternListing);

});