// This hides the navigation bar and shows the navigation button
// when the user sizes the window too 500px

document.addEventListener("DOMContentLoaded", function () {
  function hideNavBar() {
    if (window.innerWidth <= 544) {
      document.getElementById("navbar").style.display = "none";
      document.getElementById("mobile_nav_btn").style.display = "block";
      document.getElementById("dropdown_nav").style.display = "none";
    } else {
      document.getElementById("navbar").style.display = "block";
      document.getElementById("mobile_nav_btn").style.display = "none";
      document.getElementById("dropdown_nav").style.display = "none";
    }
  }
  // Call hideNavBar() when the page loads
  hideNavBar();

  // Added event listener to the window's resize event
  window.addEventListener("resize", hideNavBar);
});
// This toggles navigation dropdown menu
function openNav() {
  var dropdownNav = document.getElementById("dropdown_nav");
  if (dropdownNav.style.display === "none") {
    dropdownNav.style.display = "block";
  } else {
    dropdownNav.style.display = "none";
  }
}

// Close the navigation menu when clicking anywhere on the window
document.addEventListener("click", function (event) {
  var dropdownNav = document.getElementById("dropdown_nav");
  var dropdownBtn = document.getElementById("mobile_nav_btn");
  // Check if the clicked element is not part of the navigation menu or the mobile navigation button
  if (!dropdownNav || !dropdownBtn.contains(event.target)) {
    dropdownNav.style.display = "none";
  }
});

// These functions open and close the contact form
function openForm() {
  document.getElementsByClassName("contact-form")[0].style.display = "block";
}

function closeForm() {
  document.getElementsByClassName("contact-form")[0].style.display = "none";
}

// This hides the other website links dropdown menu when the page loads
document.addEventListener("DOMContentLoaded", function () {
  var otherSites = document.getElementsByClassName("dropdown-menu1")[0];
  otherSites.style.display = "none";
});

// This toggles other websites links dropdown menu
function openOtherSiteNav() {
  var dropdownNav = document.getElementsByClassName("dropdown-menu1")[0];
  if (dropdownNav.style.display === "none") {
    dropdownNav.style.display = "block";
  } else {
    dropdownNav.style.display = "none";
  }
}

// this is so the other websites dropdown menu can close when the user clicks anywhere on the page
// Close the navigation menu when clicking anywhere on the window
document.addEventListener("click", function (event) {
  var dropdownNav = document.getElementById("myDropdown");
  var dropdownBtn = document.getElementById("other_sites");
  // Check if the clicked element is not part of the navigation menu or the mobile navigation button
  if (!dropdownNav || !dropdownBtn.contains(event.target)) {
    dropdownNav.style.display = "none";
  }
});
