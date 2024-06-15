const image = document.querySelector('.image');

window.addEventListener('scroll', () => {
    // Calculate blur based on scroll position
    const scrollPosition = window.scrollY;
    const blurAmount = (scrollPosition / 80); // Adjust as needed

    // Apply the blur effect with smoother transition
    image.style.filter = `blur(${0.5}px)`;
});

const textOverlay = document.querySelector('.text-overlay');
const imageSection = document.querySelector('.image-section');

// Function to handle scroll events and show the text and logo
function handleScroll() {
    // Once the user scrolls, immediately reveal the text and logo
    textOverlay.style.opacity = 1;
    
    // Remove the scroll event listener to prevent further changes
    window.removeEventListener('scroll', handleScroll);
}

// Listen for the first scroll event and call the handleScroll function
window.addEventListener('scroll', handleScroll);



var scrolling = document.querySelector('.scrolling');
window.addEventListener('scroll', handleScroll);

function handleScroll() {
    if (window.scrollY >150){
        scrolling.classList.add('active');

    }

    else{
        scrolling.classList.remove('active')
    }
}

// script.js

// Get the modal
var modal = document.getElementById("contactModal");

// Get the button that opens the modal
var btn = document.getElementById("contactBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}