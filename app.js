//Navbar Menu
document.addEventListener("DOMContentLoaded", function() {
  const navbarMenuButton = document.getElementById("navbarMenu");
  const mobileMenu = document.getElementById("mobileMenu");

  function toggleMobileMenu() {
    if (window.innerWidth <= 576) {
      if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
      } else {
        mobileMenu.style.display = "flex";
      }
    }
  }

  navbarMenuButton.addEventListener("click", toggleMobileMenu);

  window.addEventListener("resize", function() {
    // Reevaluate the mobile menu visibility on window resize
    if (window.innerWidth > 576) {
      // Reset the mobile menu display to none if the screen width exceeds 586 pixels
      mobileMenu.style.display = "none";
    }
  });
});

//Search Bar
document.addEventListener('DOMContentLoaded', function() {
  const searchbarMobileIcon = document.getElementById('searchbarMobileIcon');
  const mobileSearchbar = document.getElementById('mobileSearchbar');
  const searchInput = document.querySelector('#mobileSearchbar input[type="text"]');

  // Function to show mobile searchbar
  function showMobileSearchbar() {
      mobileSearchbar.style.display = 'block';
      document.addEventListener('click', closeMobileSearchbarOutsideClick);
  }

  // Function to close mobile searchbar
  function closeMobileSearchbar() {
      mobileSearchbar.style.display = 'none';
      document.removeEventListener('click', closeMobileSearchbarOutsideClick);
  }

  // Function to close mobile searchbar on outside click
  function closeMobileSearchbarOutsideClick(event) {
      if (!mobileSearchbar.contains(event.target) && event.target !== searchbarMobileIcon) {
          closeMobileSearchbar();
      }
  }

  // Event listener to toggle mobile searchbar visibility on searchbarMobileIcon click
  searchbarMobileIcon.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevents closing when clicking on the searchbar icon
      if (mobileSearchbar.style.display === 'none' || mobileSearchbar.style.display === '') {
          showMobileSearchbar();
      } else {
          closeMobileSearchbar();
      }
  });

  // Event listener to prevent closing when clicking inside the input field
  searchInput.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevents closing when clicking inside the input field
  });

  // Close mobile searchbar if already open when the user clicks anywhere else on the screen
  document.addEventListener('click', function(event) {
      if (mobileSearchbar.style.display === 'block' && event.target !== searchbarMobileIcon) {
          closeMobileSearchbar();
      }
  });
});


//Carousel
const carouselImages = document.querySelectorAll('.carousel-images');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

let currentIndex = 0;
const totalSlides = carouselImages.length;

function showSlide(index) {
  for (let i = 0; i < totalSlides; i++) {
    carouselImages[i].style.display = 'none';
  }
  carouselImages[index].style.display = 'grid';
}

showSlide(currentIndex);

leftButton.addEventListener('click', function() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
});

rightButton.addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
});




//Footer Options
function setupEventListeners() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 586) {
    const buttons = document.querySelectorAll('.footerOptions-button button');

    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const targetDiv = document.getElementById(this.id.replace('Button', ''));
        targetDiv.style.display = targetDiv.style.display === 'flex' ? 'none' : 'flex';
      });
    });
  }
}

setupEventListeners();

window.addEventListener('resize', function() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 586) {
    setupEventListeners();
  }
});
