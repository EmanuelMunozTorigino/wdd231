// extract the 2 elements neccesary for the hamburger menu, the navigation bar and the button or link (≡) where the functionality will work on

//const $nav = document.querySelector(".nav-list");

const $nav = document.getElementById("animateNav");

const $hambutton = document.getElementById("menu");

// Then i need to add an event to handler the function, when the element is clicked a new class called "show" is set to the nav element and toggle when clicked again

$hambutton.addEventListener("click", () => {
  $nav.classList.toggle("show");
  $hambutton.classList.toggle("show");
});
