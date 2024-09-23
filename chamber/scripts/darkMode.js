const $modeBtn = document.getElementById("darkMode");

const $body = document.body;

$modeBtn.addEventListener("click", () => {
  if ($modeBtn.alt === "Dark Mode Logo") {
    $modeBtn.src = "images/bright.png";
    $modeBtn.alt = "Bright Mode Logo";
  } else {
    $modeBtn.src = "images/dark.png";
    $modeBtn.alt = "Dark Mode Logo";
  }
  $body.classList.toggle("dark-mode");
});
