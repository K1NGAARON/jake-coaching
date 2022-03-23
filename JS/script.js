const home = document.querySelector("#home");
const contactForm = document.querySelector("#contact");
const programs = document.querySelector("#programs");
const aboutJake = document.querySelector("#about-jake");
const reviews = document.querySelector("#reviews");
const download = document.querySelector("#download");

// Scroll to page sections
function scrollToForm() {
    contactForm.scrollIntoView();
}

function scrollToPrograms() {
    programs.scrollIntoView();
}

function scrollToAbout() {
    aboutJake.scrollIntoView();
}

function scrollToReviews() {
    reviews.scrollIntoView();
}

function scrollToHome() {
    home.scrollIntoView();
}

function scrollToDownload() {
    download.scrollIntoView();
}


// Open small menu on hamburger click
let smallMenuWrapper = document.querySelector(".small-menu-wrapper");

function openSmallMenu() {
    smallMenuWrapper.classList.toggle("open");
}


// Animate numbers
function animate(obj, initVal, lastVal, duration) {

let startTime = null;

// get the current timestamp and assign it to the currentTime variable
let currentTime = Date.now();

// pass the current timestamp to the step function
const step = (currentTime ) => {

    // if the start time is null, assign the current time to startTime
    if (!startTime) {
            startTime = currentTime ;
    }

    // calculate the value to be used in calculating the number to be displayed
    const progress = Math.min((currentTime  - startTime) / duration, 1);

    // calculate what to be displayed using the value gotten above
    obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

    // checking to make sure the counter does not exceed the last value (lastVal)
    if (progress < 1) {
            window.requestAnimationFrame(step);
    }
    else {
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
    }
};

// start animating
window.requestAnimationFrame(step);
}

let text1 = document.getElementById('0101');
let text2 = document.getElementById('0102');
let text3 = document.getElementById('0103');

function load() {
    animate(text1, 0, 11, 5000);
    animate(text2, 0, 42, 5000);
    animate(text3, 0, 96, 5000);
}

window.addEventListener('DOMContentLoaded', load())