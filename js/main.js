// Background height scales with size of main container
const background = document.getElementById('background');

// Mission and News page 
var content = document.getElementById('hero-content');

// Products page
const productContent = document.getElementById('product-content');
if (productContent) { content = productContent };

// Careers page
const careersContent = document.getElementById('career-content');
if (careersContent) { content = careersContent };

// About Page
const aboutContent = document.getElementById('about-content');
if (aboutContent) { content = aboutContent };

// Initialize height after page finishes loading
setTimeout(function () {
    background.style.height = `${content.clientHeight + 120}px`
}, 1000);

// Change height on resize
window.addEventListener('resize', function () {
    background.style.height = `${content.clientHeight + 120}px`;
});