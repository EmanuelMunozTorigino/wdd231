const $modeBtn = document.getElementById("darkMode");

const $header = document.querySelector("header");
const $main = document.querySelector("main");
const $body = document.body;
const $footer = document.querySelector("footer");

const $companiesArticle = document.getElementById("grid");

$modeBtn.addEventListener("click", () => {
  if ($modeBtn.alt === "Dark Mode Logo") {
    $modeBtn.src = "images/bright.png";
    $modeBtn.alt = "Bright Mode Logo";
  } else {
    $modeBtn.src = "images/dark.png";
    $modeBtn.alt = "Dark Mode Logo";
  }

  //$main.classList.toggle("dark-mode");

  $body.classList.toggle("dark-mode");
  $header.classList.toggle("dark-mode");
  $footer.classList.toggle("dark-mode");

  $companiesArticle.classList.toggle("dark-mode");
});
