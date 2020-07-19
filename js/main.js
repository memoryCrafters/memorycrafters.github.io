// Pre-load images for site optimization
var images = new Array();
function preloadImages() {
    for (i = 0; i < preloadImages.arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preloadImages.arguments[i];
    }
}
preloadImages("img/mC_favicon.JPG", "img/smartmockups_kcgjf0hg.jpg", "img/smartmockups_kbwarym5.png", "img/smartmockups_kbwaxz99.png", "img/smartmockups_kbwebwdr.png", "img/smartmockups_kby45upn.png");


