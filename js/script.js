// Tob Header 
const texts = [
    () => `Get an extra 20% off | Ends in ${getCountdown()} | <a href="https://www.example.com/holiday-gifts" target="_blank">Shop holiday gifts and more</a>`,
    () => `<a href="https://www.example.com/shipping" target="_blank">Free shipping</a> on selected full-price and promotional items | Limited time only | T&Cs`,
    () => `<a href="https://www.example.com/sale" target="_blank">Enjoy up to 60% off</a>. Shop now`
];

// Function to calculate the countdown
function getCountdown() {
    const endDate = new Date("2024-12-18T12:00:00"); // Replace with your desired end date
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

//checkout script 
function selectPayment(element) {
    const options = document.querySelectorAll('.payment-option');
    options.forEach(option => option.classList.remove('selected'));
    element.classList.add('selected');
}



// product details
 // Get the main images and zoomed image div
const mainImages = document.querySelectorAll('.mainImage');
const zoomedImageDiv = document.getElementById('zoomedImage');

// Add event listener for zoom-in on mouseenter
mainImages.forEach(image => {
  image.addEventListener('mouseenter', (e) => {
    const imgSrc = e.target.src;
    const zoomedImg = document.createElement('img');
    zoomedImg.src = imgSrc; // Use the same image for zoom effect
    zoomedImageDiv.innerHTML = ''; // Clear any previous zoomed images
    zoomedImageDiv.appendChild(zoomedImg); // Add the zoomed image
    zoomedImageDiv.style.display = 'block'; // Show the zoomed image
  });

  // Add event listener for zoom-out on mouseleave
  image.addEventListener('mouseleave', () => {
    zoomedImageDiv.style.display = 'none'; // Hide the zoomed image
  });

  // Add event listener to apply zoom effect when mouse is moving
  image.addEventListener('mousemove', (e) => {
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left; // X position of mouse
    const offsetY = e.clientY - rect.top; // Y position of mouse
    const xPercent = offsetX / rect.width * 100; // X percentage of mouse position
    const yPercent = offsetY / rect.height * 100; // Y percentage of mouse position
    e.target.style.transform = `scale(1.5) translate(-${xPercent}%, -${yPercent}%)`;
  });
});
