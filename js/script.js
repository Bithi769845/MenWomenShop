// Get the button element
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 100px
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Scroll to the top when the button is clicked
scrollToTopBtn.onclick = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};

// Top Header 
const texts = [
    () => `Get an extra 20% off | Ends in ${getCountdown()} | <a href="https://www.example.com/holiday-gifts" target="_blank">Shop holiday gifts and more</a>`,
    () => `<a href="https://www.example.com/shipping" target="_blank">Free shipping</a> on selected full-price and promotional items | Limited time only | T&Cs`,
    () => `<a href="https://www.example.com/sale" target="_blank">Enjoy up to 60% off</a>. Shop now`
];

// Function to calculate the countdown
function getCountdown() {
    const endDate = new Date("2024-12-25T12:00:00"); // Replace with your desired end date
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) return "0d 0h 0m 0s"; // Timer ends when the date is reached

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Get the text container
const textElement = document.getElementById("changingText");

// Counter to track the current text
let index = 0;

// Function to update the text
function updateText() {
    textElement.innerHTML = texts[index](); // Use innerHTML to render links
    index = (index + 1) % texts.length; // Loop through the texts
}

// Function to continuously update the timer text
function updateCountdown() {
    if (index === 0) {
        // Update the timer text only if the current text is the first one
        textElement.innerHTML = texts[0]();
    }
}

// Update text every 5 seconds
setInterval(updateText, 5000);

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initialize the first text
updateText();


// JavaScript for handling language selection
//middle header and main header global icon
document.querySelectorAll('.global .dropdown-item').forEach((item) => {
    item.addEventListener('click', function () {
        // Remove active state from all items
        document.querySelectorAll('.global .dropdown-item').forEach((el) => {
            el.classList.remove('active');
        });

        // Add active state to the clicked item
        this.classList.add('active');
    });
});



// <!-- Initialize Swiper -->
    var swiper = new Swiper(".mySwiper", {
        speed:500,
        effect: 'fade',
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: true,
    });





//checkout script 
function selectPayment(element) {
    const options = document.querySelectorAll('.payment-option');
    options.forEach(option => option.classList.remove('selected'));
    element.classList.add('selected');
}



// Product Details
//  - Quantity
// Get the minus and plus buttons
var minusButton = document.getElementById('minusButton');
var plusButton = document.getElementById('plusButton');
var quantity = document.getElementById('quantity');

// Add event listeners only if the elements exist
if (minusButton && quantity) {
  minusButton.addEventListener('click', function () {
    var currentValue = parseInt(quantity.value);
    if (currentValue > 1) {
      quantity.value = currentValue - 1;
    }
  });
}

if (plusButton && quantity) {
  plusButton.addEventListener('click', function () {
    var currentValue = parseInt(quantity.value);
    if (currentValue < 10) {
      quantity.value = currentValue + 1;
    }
  });
}


//  zoom functionality  
const carouselItems = document.querySelectorAll(".zoomimage .carousel-item img");

// Add zoom functionality to each image
carouselItems.forEach((image) => {
image.addEventListener("mousemove", (e) => {
  const containerWidth = image.offsetWidth;
  const containerHeight = image.offsetHeight;

  const x = e.pageX - image.offsetLeft;
  const y = e.pageY - image.offsetTop;

  const translateX = (containerWidth / 2 - x) * 2;
  const translateY = (containerHeight / 2 - y) * 2;

  const scale = 3; // Adjust scale for zoom level

  image.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  image.style.transition = "transform 0.3s ease-out"; // Smooth transition
});

image.addEventListener("mouseleave", () => {
  image.style.transform = "translate(0%, 0%) scale(1)"; // Reset zoom on mouse leave
});
});

// Thumbnail click functionality
$(document).ready(function () {
  // Check if .thumbnail exists on the page
  if ($('.thumbnail').length > 0 && $('#carouselExampleIndicators').length > 0) {
    // Add click event listener to thumbnails
    $('.thumbnail').on('click', function () {
      // Get the slide index from the data-bs-slide-to attribute
      const slideIndex = $(this).data('bs-slide-to');
      
      // Use the carousel method to go to the specific slide
      $('#carouselExampleIndicators').carousel(slideIndex);
    });
  }
});



  // checkout
  function toggleAccountFields() {
    const accountFields = document.getElementById('accountFields');
    accountFields.classList.toggle('d-none');
}

function toggleShippingAddress() {
    const shippingAddress = document.getElementById('shippingAddress');
    shippingAddress.classList.toggle('d-none');
}









        