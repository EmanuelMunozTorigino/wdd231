// Anonymous function sintax

(function () {
  const lastVisitMessage = document.getElementById("lastVisitMessage");
  const lastVisit = localStorage.getItem("lastVisit"); // Look for the localStorage of the browser a variable lastVisit.
  const now = new Date();

  if (!lastVisit) {
    // First-time visitor
    lastVisitMessage.textContent =
      "Welcome! Let us know if you have any questions.";
  } else {
    const lastVisitDate = new Date(lastVisit);
    const timeDiff = now - lastVisitDate; // Time difference in milliseconds
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert to days

    if (daysDiff === 0) {
      lastVisitMessage.textContent = "Back so soon! Awesome!";
    } else {
      const dayText = daysDiff === 1 ? "day" : "days"; // Ternary operator, Get the first part if is true, else variable get the last value
      lastVisitMessage.textContent = `You last visited ${daysDiff} ${dayText} ago.`;
    }
  }

  // Store the current date for future visits
  localStorage.setItem("lastVisit", now);
})();
