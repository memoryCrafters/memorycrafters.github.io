// Same as news-- Function to show embedded job listings

const strategy = document.getElementById('strategy');
const salesLeader = document.getElementById('salesLeader');
const softwareEngineer = document.getElementById('softwareEngineer');
const productManagement = document.getElementById('productManagement');
const salesIntern = document.getElementById('salesIntern');
const softwareIntern = document.getElementById('softwareIntern');
const digitalMarketingIntern = document.getElementById('digitalMarketingIntern')

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
    iframe : '<iframe src="https://drive.google.com/file/d/1tzbHKfUzaMfEjvYxR75gXKRKEh5yLDN4/preview"></iframe>',
    link : 'https://drive.google.com/file/d/1tzbHKfUzaMfEjvYxR75gXKRKEh5yLDN4/view'
};

var salesInternListing = {
    iframe : '<iframe src="https://drive.google.com/file/d/1vCJ2Ea0fZNcQe93FGljQr2Pvqdlom5n_/preview"></iframe>',
    link : 'https://drive.google.com/file/d/1vCJ2Ea0fZNcQe93FGljQr2Pvqdlom5n_/view'
};

var softwareInternListing = {
    iframe : '<iframe src="https://drive.google.com/file/d/1V9mZ9yWcU4tgofLLCyHc8G1AaAQ5qeoS/preview"></iframe>',
    link : 'https://drive.google.com/file/d/1V9mZ9yWcU4tgofLLCyHc8G1AaAQ5qeoS/view'
};

var digitalMarketingInternListing = {
    iframe: '<iframe src = "https://drive.google.com/file/d/1F8q0Ea11G1k91qQUopdDaAgm0eLa_qqL/preview"></iframe>',
    link: 'https://drive.google.com/file/d/1F8q0Ea11G1k91qQUopdDaAgm0eLa_qqL/view'
}

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
    btnFunction(digitalMarketingIntern, digitalMarketingInternListing);
};

// Hide embedded PDF if on small screen and instead pop-up preview. //

// Initialize on page load
if (window.innerWidth < 768) { careerWrapper.style.display = 'none' };
runListings();

// When resizing 
window.addEventListener('resize', function () {

    runListings();

});