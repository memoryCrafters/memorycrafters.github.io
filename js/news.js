// Function to show embedded newsletters with buttons

const july = document.getElementById('news-button1');
const june = document.getElementById('news-button2');
const may = document.getElementById('news-button3');
const newsWrapper = document.getElementById('newswrapper');

var juneNews = '<iframe src="https://drive.google.com/file/d/1XCa8DHH_UZv2nS2_vQ8LVBYk_v4Jce9-/preview" width="640" height="480"></iframe>';
var mayNews = '<iframe src="https://drive.google.com/file/d/1BzEBHmVSIuNhRkYbC-4gvWDv3djxgBsE/preview" width="640" height="480"></iframe>';

june.addEventListener('click', function () {
    newsWrapper.innerHTML = juneNews;
});

may.addEventListener('click', function () {
    newsWrapper.innerHTML = mayNews;
});