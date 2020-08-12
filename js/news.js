// Function to show embedded newsletters with buttons

const july = document.getElementById('news-button1');
const june = document.getElementById('news-button2');
const may = document.getElementById('news-button3');

const newsWrapper = document.getElementById('newswrapper');

var julyNews = {
    iframe : '<iframe src="https://drive.google.com/file/d/19ZtZ9S9Vx_uYGdhoGOUuPLid3E1vTw-u/preview"></iframe>',
    link : 'https://drive.google.com/file/d/19ZtZ9S9Vx_uYGdhoGOUuPLid3E1vTw-u/view'
};

var juneNews = {
    iframe : '<iframe src="https://drive.google.com/file/d/1XCa8DHH_UZv2nS2_vQ8LVBYk_v4Jce9-/preview"></iframe>',
    link : 'https://drive.google.com/file/d/1XCa8DHH_UZv2nS2_vQ8LVBYk_v4Jce9-/view'
};

var mayNews = {
    iframe : '<iframe src="https://drive.google.com/file/d/1BzEBHmVSIuNhRkYbC-4gvWDv3djxgBsE/preview"></iframe>',
    link : 'https://drive.google.com/file/d/1BzEBHmVSIuNhRkYbC-4gvWDv3djxgBsE/view'
};

// Function to hide embedded PDF on small devices (landscape/portrait phones)
const btnFunction = function (element, newsMonth) {

    if (window.innerWidth < 768) {
        newsWrapper.style.display = 'none';
        element.onclick = function () {
            window.open(newsMonth.link);
        };
    }

    else {
        newsWrapper.style.display = 'block';
        element.onclick = function () {
            newsWrapper.innerHTML = newsMonth.iframe;
        };
    };

};

// Hide embedded PDF if on small screen and instead pop-up preview. //

// Initialize on page load
if (window.innerWidth < 768) { newsWrapper.style.display = 'none' };

btnFunction(july, julyNews);
btnFunction(june, juneNews);
btnFunction(may, mayNews);

// When resizing 
window.addEventListener('resize', function () {

    btnFunction(july, julyNews);
    btnFunction(june, juneNews);
    btnFunction(may, mayNews);

});