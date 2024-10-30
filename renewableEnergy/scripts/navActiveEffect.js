// Select all the links from the DOM object
const navLinks = document.querySelectorAll(".nav-link");

// Add a new click event for each link..
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove the active function for all links
    navLinks.forEach((item) => item.classList.remove("active"));

    // Just add the active class for the clicked link
    this.classList.add("active");
  });
});

/*

// Select all the links from the DOM object
const navLinks = document.querySelectorAll(".nav-link");

// Get the current URL path (e.g., "/index.html")
const currentPath = window.location.pathname;

// Iterate over each link
navLinks.forEach((link) => {
  // Check if the link's href matches the current path
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
  }

  // Add event listeners to handle clicks
  link.addEventListener("click", function () {
    navLinks.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});

*/
