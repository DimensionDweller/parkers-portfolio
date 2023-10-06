(function() {
  "use strict"; // Start of use strict

  var scrollToTop = document.querySelector('.scroll-to-top');
  
  if (scrollToTop) {
    
    // Scroll to top button appear
    window.addEventListener('scroll', function() {
      var scrollDistance = window.pageYOffset;

      if (scrollDistance > 100) {
        scrollToTop.style.display = 'block';
      } else {
        scrollToTop.style.display = 'none';
      }
    });
  }

  var mainNav = document.querySelector('#mainNav');

  if (mainNav) {

    var navbarCollapse = mainNav.querySelector('.navbar-collapse');
    
    if (navbarCollapse) {
      
      var collapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
      
      var navbarItems = navbarCollapse.querySelectorAll('a');
      
      // Closes responsive menu when a scroll trigger link is clicked
      for (var item of navbarItems) {
        item.addEventListener('click', function (event) {
          collapse.hide();
        });
      }
    }

    // Collapse Navbar
    var collapseNavbar = function() {

      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    collapseNavbar();
    // Collapse the navbar when page is scrolled
    document.addEventListener("scroll", collapseNavbar);
  }
    AOS.init();
    
    document.addEventListener("DOMContentLoaded", function() {
      var messages = [
        "Welcome",
        "Please scroll down to see my projects and learn more about me",
        "Friendly reminder to be kind to others...",
        "And do more Data Science for social good when you can...",
        "And, of course, have fun while doing it all!"
      ];

      var index = 0;
      var rotatingTextElement = document.getElementById('rotating-text');

      function updateMessage() {
        rotatingTextElement.classList.add('fade-out'); // Start the fade-out animation

        setTimeout(function() {
          rotatingTextElement.classList.remove('fade-out', 'fade-in'); // Reset the animation classes
          index = (index + 1) % messages.length; // Update the index
          rotatingTextElement.textContent = messages[index]; // Update the text
          rotatingTextElement.classList.add('fade-in'); // Start the fade-in animation
        }, 2000); // Delay for the duration of the fade-out animation
      }

      rotatingTextElement.textContent = messages[0]; // Initialize the first message
      rotatingTextElement.classList.add('fade-in'); // Start the fade-in animation

      setTimeout(function() {
        setInterval(updateMessage, 6000); // Update the message every 7 seconds (5 seconds visible + 1 second fade-out + 1 second fade-in)
      }, 5000); // Delay before starting the rotation, keeping the first message visible for 5 seconds
    });



})(); // End of use strict
