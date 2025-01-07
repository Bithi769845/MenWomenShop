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
document.addEventListener('DOMContentLoaded', () => {
  // Your existing texts array and functions
  const texts = [
    () => `Get an extra 20% off | Ends in ${getCountdown()} | <a href="https://www.example.com/holiday-gifts" target="_blank">Shop holiday gifts and more</a>`,
    () => `<a href="https://www.example.com/shipping" target="_blank">Free shipping</a> on selected full-price and promotional items | Limited time only | T&Cs`,
    () => `<a href="https://www.example.com/sale" target="_blank">Enjoy up to 60% off</a>. Shop now`
  ];

  // Function to calculate the countdown
  function getCountdown() {
    const endDate = new Date("2024-12-25T12:00:00");
    const now = new Date();
    const diff = endDate - now;

    if (diff <= 0) return "0d 0h 0m 0s";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  // Get the text container
  const textElement = document.getElementById("changingText");

  // If the element exists, initialize the text and countdown updates
  if (textElement) {
    let index = 0;

    // Function to update the text
    function updateText() {
      textElement.innerHTML = texts[index]();
      index = (index + 1) % texts.length;
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
  }
});

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
  speed: 500,
  effect: 'fade',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  autoplay: false,
  loop: true,
});

var swiper = new Swiper(".mbl-hero-slider", {
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

//checkout script 
function selectPayment(element) {
  const options = document.querySelectorAll('.payment-option');
  options.forEach(option => option.classList.remove('selected'));
  element.classList.add('selected');
}


// Product Details
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

//Choose your size selector
// Event listener for selecting size from EU Size list
document.querySelectorAll('#euSizeList .list-group-item').forEach(function (item) {
  item.addEventListener('click', function () {
    var selectedSize = item.getAttribute('data-size');
    document.getElementById('selectedSizeText').textContent = selectedSize;
    document.getElementById('collapseSize').classList.remove('show'); // Collapse the accordion
  });
});

// Event listener for selecting size from Manufacturer Size list
document.querySelectorAll('#manufacturerSizeList .list-group-item').forEach(function (item) {
  item.addEventListener('click', function () {
    var selectedSize = item.getAttribute('data-size');
    document.getElementById('selectedSizeText').textContent = selectedSize;
    document.getElementById('collapseSize').classList.remove('show'); // Collapse the accordion
  });
});

// product image zoom effect
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".product-details")) {
    // Document selectors
    const thumbnailWrapper = document.querySelector(".swiper-wrapper");
    const mainImage = document.querySelector(".mainImage");

    // Check if the necessary elements exist on the page
    if (mainImage && thumbnailWrapper) {
      // List of images
      const imageList = [
        "https://cycasdor.com/wp-content/uploads/2024/05/IMG_82861-scaled-1.jpg",
        "https://cycasdor.com/wp-content/uploads/2024/05/ed-scaled-1.jpg",
        "https://cycasdor.com/wp-content/uploads/2024/05/01-scaled-1.jpg",
        "https://cycasdor.com/wp-content/uploads/2024/09/Lammy-coat-cognac-brown_Cognac-Brown_Schuin-rechts-scaled.jpg",
        "https://cycasdor.com/wp-content/uploads/2024/09/Lammy-coat-cognac-brown_Cognac-Brown_Front-scaled.jpg",
        "https://cycasdor.com/wp-content/uploads/2024/09/Lammy-coat-chocolate-dark-brown_Chocolate-Brown_Schuin-rechts-1-scaled.jpg",
        "https://cycasdor.com/wp-content/uploads/2024/05/LEATHERHYPE-06252020-022-2-scaled-1.jpg",
        "https://cycasdor.com/wp-content/uploads/2024/05/04-scaled-1.jpg"
      ];

      // Set the first image to be shown initially
      mainImage.innerHTML = `<img src="${imageList[0]}" alt="Main Image">`;

      // Generate thumbnail boxes and add them to the carousel
      imageList.forEach((image, index) => {
        const child = `<div class="swiper-slide">
              <div class="thumbnailBox">
                  <img src="${image}" alt="Thumbnail ${index + 1}">
              </div>
          </div>`;
        thumbnailWrapper.innerHTML += child;
      });

      // Add click event listener for thumbnails (swiper slides)
      thumbnailWrapper.querySelectorAll(".swiper-slide").forEach((swiperSlide) => {
        swiperSlide.addEventListener("click", (e) => {
          const activeThumbnail = document.querySelector(".thumbnailBox.active");
          if (activeThumbnail) {
            activeThumbnail.classList.remove("active");
          }
          swiperSlide.querySelector(".thumbnailBox").classList.add("active");
          const imageSrc = swiperSlide.querySelector("img").getAttribute("src");
          mainImage.innerHTML = `<img src="${imageSrc}" alt="Main Image">`;
        });
      });

      // Initialize Swiper for horizontal scrolling and 4 images per slide
      const swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 5,
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        touchEventsTarget: 'container',
      });

      // Zoom effect on main image
      mainImage.addEventListener("mousemove", (e) => {
        const containerWidth = mainImage.offsetWidth;
        const containerHeight = mainImage.offsetHeight;

        const image = mainImage.querySelector("img");
        const imageWidth = image.offsetWidth;
        const imageHeight = image.offsetHeight;

        const x = e.pageX - mainImage.offsetLeft;
        const y = e.pageY - mainImage.offsetTop;

        const translateX = (containerWidth / 2 - x) * 2;
        const translateY = (containerHeight / 2 - y) * 2;

        const scale = 3;

        image.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
      });

      // Reset zoom effect when mouse leaves
      mainImage.addEventListener("mouseleave", () => {
        const image = mainImage.querySelector("img");
        image.style.transform = "translate(0%, 0%) scale(1)";
      });
    }
  }
});

// checkout
(function () {
  // // Function to show manual address fields
  function manualAddress() {
    const formContainer = document.querySelector('.shipping-form-container');
    const addressContainer = formContainer.querySelector('#addressContainer');
    const manualAddressLink = formContainer.querySelector('#manualAddressLink');
    const manualAddressFields = formContainer.querySelector('#manualAddressFields');

    manualAddressLink.style.display = 'none';
    addressContainer.style.display = 'none';

    // Add smooth animation for opening
    manualAddressFields.classList.add('open');
  }

  // Function to go back to the address view
  function goBackToAddress() {
    const formContainer = document.querySelector('.shipping-form-container');
    const addressContainer = formContainer.querySelector('#addressContainer');
    const manualAddressLink = formContainer.querySelector('#manualAddressLink');
    const manualAddressFields = formContainer.querySelector('#manualAddressFields');
    manualAddressLink.style.display = 'block';
    manualAddressFields.classList.remove('open');
    addressContainer.style.display = 'block';
  }

  // Function to handle quantity and product deletion
  function initializeCartActions() {
    const quantityValue = document.getElementById('quantityValue');
    const decreaseButton = document.getElementById('decreaseQuantity');
    const increaseButton = document.getElementById('increaseQuantity');
    const deleteButtons = document.querySelectorAll('.delete-product');

    if (decreaseButton && increaseButton && quantityValue) {
      decreaseButton.addEventListener('click', () => {
        const currentValue = parseInt(quantityValue.textContent, 10);
        if (currentValue > 1) {
          quantityValue.textContent = currentValue - 1;
        }
      });

      increaseButton.addEventListener('click', () => {
        const currentValue = parseInt(quantityValue.textContent, 10);
        quantityValue.textContent = currentValue + 1;
      });
    }

    deleteButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.target.closest('.product-item').remove();
      });
    });
  }

  // Initialize actions on DOM content loaded
  document.addEventListener('DOMContentLoaded', () => {
    initializeCartActions();
  });

  // Expose specific functions if needed for external use
  window.manualAddress = manualAddress;
  window.goBackToAddress = goBackToAddress;
})();

function selectPayment(paymentMethod) {
  // Hide all payment fields first
  document.querySelectorAll('.payment-fields').forEach(function (field) {
    field.style.display = 'none';
  });

  // Show the appropriate payment method's fields
  switch (paymentMethod) {
    case 'card':
      document.getElementById('creditCardFields').style.display = 'block';
      break;
    case 'bank':
      document.getElementById('bankFields').style.display = 'block';
      break;
    case 'ideal':
      document.getElementById('idealFields').style.display = 'block';
      break;
    case 'giftCard':
      document.getElementById('giftCardFields').style.display = 'block';
      break;
    case 'crypto':
      document.getElementById('cryptoFields').style.display = 'block';
      break;
  }

  // Update "More" button text for gift card or cryptocurrency
  if (paymentMethod === 'giftCard') {
    document.getElementById('dropdownMore').innerHTML = '<i class="fas fa-gift"></i> Gift';
  } else if (paymentMethod === 'crypto') {
    document.getElementById('dropdownMore').innerHTML = '<i class="fab fa-bitcoin"></i> Crypto';
  } else {
    // Reset "More" button text to default for other payment methods
    document.getElementById('dropdownMore').innerHTML = '<i class="fas fa-ellipsis-h"></i> More';
  }
}

function showCouponInput() {
  const title = document.getElementById('coupon-title');
  const collapse = document.getElementById('coupon-collapse');

  // Hide the title and show the input field
  title.style.display = 'none';
  collapse.style.display = 'block';
}

function toggleApplyButton(input) {
  const applyButton = document.getElementById('apply-button');

  // Show the Apply button if input has at least one character
  if (input.value.trim().length > 0) {
    applyButton.style.display = 'inline-block';
  } else {
    applyButton.style.display = 'none';
  }
}

jQuery(document).ready(
  (function ($) {
    let showPopupId = 'showCountrySelector'
    let closePopupId = 'closeCountrySelector'
    let backPopupId = 'backMianSelector'
    let subPopupId = 'subCountrySelector'
    let locationPopupId = 'cdr-countrySelector'
    let overlayPopupId = 'cdr-overly'
    let subPopupContentId = 'subSelectorContent'
    let locationPopUpLi = '#' + locationPopupId + ' .location-section ul li'

    // Function to show the main popup
    function showPopup() {
      document.getElementById(overlayPopupId).style.display = 'block'; // Show overlay
      document.getElementById(locationPopupId).style.left = '0';
    }

    // Function to hide the main popup
    function hidePopup() {
      document.getElementById(overlayPopupId).style.display = 'none'; // Hide overlay
      document.getElementById(locationPopupId).style.left = '-560px';
      // If subPopup is open, close it
      if (document.getElementById(subPopupId).style.left === '0') {
        hideSubPopup();
      }
    }

    function showSubPopup(event) {
      let target = $(event.target);
      let subPopupContent = $('#' + subPopupContentId);
      subPopupContent.empty();

      // Check if the target is a button or within a li, and get the appropriate data
      let listLang;
      if (target.is('button')) {
        listLang = target.siblings('.datacountry').html();
      } else {
        listLang = target.closest('li').find('.datacountry').html();
      }
      subPopupContent.html(listLang);

      // Show subPopup by setting left style to '0'
      $('#' + subPopupId).css('left', '0');
    }

    // Function to hide the sub popup
    function hideSubPopup() {
      document.getElementById(subPopupId).style.left = '-560px';
      // Check if the main popup is also closed; if so, hide the overlay
      if (document.getElementById(locationPopupId).style.left === '-560px') {
        document.getElementById(overlayPopupId).style.display = 'none';
      }
    }

    // Close button on subPopup
    function closeSubPopup() {
      hideSubPopup();
    }

    // Event listeners
    document.getElementById(showPopupId).addEventListener('click', showPopup);

    // Add event listeners to list items
    document.querySelectorAll(locationPopUpLi).forEach((element) => {
      element.addEventListener('click', showSubPopup);
    });

    // Add event listeners to buttons within list items
    document.querySelectorAll(locationPopUpLi + ' button').forEach((element) => {
      element.addEventListener('click', showSubPopup);
    });

    document.getElementById(closePopupId).addEventListener('click', hidePopup);
    document.getElementById(overlayPopupId).addEventListener('click', hidePopup);

    var popupContent = document.getElementById(showPopupId).innerHTML;

    // Select the element with class 'country_selector_dropdown'
    var countrySelector = document.querySelector('.country_selector_dropdown a.country_selector_dropbtn');

    // Change the text of the 'country_selector_dropdown' element
    if (countrySelector) {
      countrySelector.innerHTML = popupContent;
    }

    document.getElementById(overlayPopupId).addEventListener('click', hidePopup);

    // Back button on subPopup
    document.getElementById(backPopupId).addEventListener('click', function () {
      hideSubPopup();
      setTimeout(showPopup, 500);
    });
  })
);

let selectedCountry = 'United States';

// Fetch address suggestions based on the input
function fetchAddressSuggestions() {
  const addressInput = document.getElementById('address');
  const addressSuggestionsContainer = document.getElementById('addressSuggestions');
  const query = addressInput.value.trim();

  // Ensure the query is long enough to trigger the search
  if (query.length > 2) {
    const country = encodeURIComponent(selectedCountry); // Ensure country is encoded
    const searchQuery = encodeURIComponent(query); // Ensure query is encoded
    const url = `https://nominatim.openstreetmap.org/search?q=${searchQuery}&format=json&addressdetails=1&limit=5`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        addressSuggestionsContainer.innerHTML = '';
        if (data.length > 0) {
          data.forEach(item => {
            const suggestion = document.createElement('div');
            suggestion.className = 'suggestion-item fs-6';
            suggestion.textContent = item.display_name;
            suggestion.onclick = () => selectSuggestion(item);
            addressSuggestionsContainer.appendChild(suggestion);
          });
        } else {
          addressSuggestionsContainer.innerHTML = '<div class="fs-7">No suggestions found.</div>';
        }
      })
      .catch(error => {
        console.error('Error fetching address suggestions:', error);
      });
  } else {
    addressSuggestionsContainer.innerHTML = ''; // Clear suggestions if query is too short
  }
}


// Autofill address fields when a suggestion is selected
function selectSuggestion(item) {
  console.log(item); // Debugging the item returned from the API

  // Set values for the address fields, falling back to an empty string if not found
  document.getElementById('address').value = item.display_name || '';
  document.getElementById('addressLine1').value = item.address.house_number || '';
  document.getElementById('city').value = item.address.city || item.address.town || item.address.village || '';
  document.getElementById('zipCode').value = item.address.postcode || '';
  document.getElementById('state').value = item.address.state || '';

  // Hide the address input field and show manual address fields
  document.getElementById('addressContainer').style.display = 'none';
  document.getElementById('manualAddressLink').style.display = 'none';

  // Ensure the manual address fields are shown correctly
  document.getElementById('manualAddressFields').style.maxHeight = '500px';

  // Optionally trigger validation for the newly populated fields
  validateAddressFields();
}

function validateAddressFields() {
  const addressLine1 = document.getElementById('addressLine1').value.trim();
  const city = document.getElementById('city').value.trim();
  const zipCode = document.getElementById('zipCode').value.trim();
  const state = document.getElementById('state').value.trim();

  // Example of validating address fields (e.g., non-empty, valid formats)
  validateField('addressLine1', addressLine1, 'Address Line 1');
  validateField('city', city, 'City');
  validateField('zipCode', zipCode, 'Zip Code');
  validateField('state', state, 'State');
}

function validateField(fieldId, value, fieldName) {
  const field = document.getElementById(fieldId);
  if (!value) {
    field.classList.add('is-invalid');
    field.classList.remove('is_valid');
    console.log(`${fieldName} is invalid.`);
  } else {
    field.classList.add('is_valid');
    field.classList.remove('is-invalid');
    console.log(`${fieldName} is valid.`);
  }
}


// Load country-specific suggestions when a country is selected
function loadSuggestions() {
  selectedCountry = document.getElementById('country').value;
  fetchAddressSuggestions();  // Update the suggestions when the country changes
}

// Open manual address fields
function manualAddress() {
  document.getElementById('manualAddressLink').style.display = 'none';
  document.getElementById('addressContainer').style.display = 'none';
  document.getElementById('manualAddressFields').style.maxHeight = '500px';
}

// Go back to address input field
function goBackToAddress() {
  document.getElementById('manualAddressLink').style.display = 'block';
  document.getElementById('addressContainer').style.display = 'block';
  document.getElementById('manualAddressFields').style.maxHeight = '0';
}

// Validate address field for the selected country
function validateAddressField(field) {
  const value = document.getElementById(field).value;
  let isValid = true;

  switch (field) {
    case 'addressLine1':
      // Add validation for address line 1 based on country
      if (selectedCountry === 'United States' && value.trim().length < 5) {
        isValid = false;
      }
      break;
    case 'city':
      // Add validation for city
      if (value.trim().length < 3) {
        isValid = false;
      }
      break;
    case 'zipCode':
      // Add validation for zip code based on country
      if (selectedCountry === 'United States' && !/^\d{5}(-\d{4})?$/.test(value)) {
        isValid = false;
      }
      break;
    case 'state':
      // Add validation for state
      if (value.trim().length < 2) {
        isValid = false;
      }
      break;
    default:
      break;
  }

  // Apply color based on validity
  document.getElementById(field).classList.toggle('is-invalid', !isValid);
  document.getElementById(field).classList.toggle('is-valid', isValid);
}

//PRODUDT QUICK VIEW
$(document).ready(function () {
  const modal = $("#customModal");
  const modalClose = $(".custom-modal-close");

  // Quick view button click
  $(".quick-view-btn").on("click", function () {
    const btn = $(this);
    const icon = btn.find("i");

    // Change icon to spinner
    icon.removeClass("fa-eye").addClass("fa-spinner fa-spin");

    // Simulate loading and open modal
    setTimeout(() => {
      modal.show(); // Show the modal
      icon.removeClass("fa-spinner fa-spin").addClass("fa-eye");
    }, 1000); // Simulated delay
  });

  $(".size-box").on("click", function () {
    $(".size-box").removeClass("active");

    $(this).addClass("active");

    const selectedSize = $(this).data("size");
    $("#selectedSize").text(`Size: ${selectedSize}`);
  });

  // Close modal
  modalClose.on("click", function () {
    modal.hide();
  });

  $(window).on("click", function (e) {
    if ($(e.target).is(modal)) {
      modal.hide();
    }
  });

  var swiper = new Swiper(".product-thumbnail", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 1, 
    spaceBetween: 10,
  });
});
