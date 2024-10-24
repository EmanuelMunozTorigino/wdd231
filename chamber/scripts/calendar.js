function createCalendar() {
  const calendarDiv = document.getElementById("calendar");
  const daysInMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
  ).getDate();
  const now = new Date();
  const today = now.getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    const dayDiv = document.createElement("div");

    if (i === today) {
      dayDiv.className = "today";
    } else {
      dayDiv.className = "day";
    }
    dayDiv.innerText = i;
    calendarDiv.appendChild(dayDiv);
  }
}

createCalendar();

const now = new Date();
const today = now.getDate();
console.log(now);
console.log(today);
