// Select all the links from the DOM object
const navLinks = document.querySelectorAll(".link");

// Add a new click event for each link..
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove the active function for all links
    navLinks.forEach((item) => item.classList.remove("active"));

    // Just add the active class for the clicked link
    this.classList.add("active");
  });
});
