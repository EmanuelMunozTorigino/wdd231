// An array of courses from the first certificate of byu Idaho software development degree
import { courses } from "../data/coursesData.js";

const displayCourses = (courses) => {
  courses.forEach((course) => {
    let cardTitle = document.createElement("h3");
    cardTitle.textContent = `${course.subject} ${course.number} `;
    cardTitle.style.margin = "1rem";
    cardTitle.style.padding = "1rem";
    cardTitle.style.borderRadius = "5px";

    if (course.completed === true) {
      cardTitle.style.backgroundColor = "#BDC3C7";
    } else {
      cardTitle.style.backgroundColor = "#F7DC6F  ";
    }
    courseCard.appendChild(cardTitle);
    $mainContainer.appendChild(courseCard);
    cardTitle.addEventListener("click", () => displayCourseDetails(course));
  });
};
/* reset Function of the courseCards container */

const reset = () => (courseCard.innerHTML = "");

/* Filter function   */

const filterCourses = (courses, button) => {
  reset(); // Using the reset function to empty the container and just show the filter courses!
  if (button.textContent === "CSE") {
    displayCourses(
      Array.from(courses).filter((course) => course.subject === "CSE")
    );
  } else if (button.textContent === "WDD") {
    displayCourses(
      Array.from(courses).filter((course) => course.subject === "WDD")
    );
  } else {
    displayCourses(courses);
  }
};

const $mainContainer = document.getElementById("course-name-container");

let courseCard = document.createElement("div");

const $filteredContainer = document.getElementById("filtered");

// Create 3 buttons for the filter functionality..

let btnAll = document.createElement("button");
btnAll.textContent = "ALL";

let btnCSE = document.createElement("button");
btnCSE.textContent = "CSE";

let btnWDD = document.createElement("button");
btnWDD.textContent = "WDD";

// The button is adding to its container div!

$filteredContainer.appendChild(btnAll);
$filteredContainer.appendChild(btnCSE);
$filteredContainer.appendChild(btnWDD);

// The Div with the buttons of the filter functionality is adding to the main container of the section:

$mainContainer.appendChild($filteredContainer);

// Get the buttons from the filter container on the DOM..

const dynamicButtons = $filteredContainer.getElementsByTagName("button");

// Getting the total credits of the first certificate and display it on the Courses section

let totalCredits = courses.reduce(
  (fullCredits, courses) => fullCredits + courses.credits,
  0
);

const creditsContainer = document.createElement("div");

// Added some margin..!

creditsContainer.style.margin = ".5rem";

const courseURL =
  "https://www.byupathway.edu/certificate/web-computer-programming";

creditsContainer.innerHTML = `The total number of credits to The Certificate '<strong><a class="course-link" href="${courseURL}" target="_blank" rel="noopener noreferrer">Web and Computer Programming</a></strong>' is <strong>${totalCredits}</strong>\n *Gray color represent completed courses`;

$mainContainer.appendChild(creditsContainer);

/*_____________________________________________________*/

const courseDialog = document.getElementById("course-details");

function displayCourseDetails(course) {
  courseDialog.innerHTML = "";
  courseDialog.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(", ")}</p>
  `;
  courseDialog.showModal();

  closeModal.addEventListener("click", () => {
    courseDialog.close();
  });

  window.addEventListener("click", (event) => {
    if (event.target == courseDialog) {
      courseDialog.close();
    }
  });
};


displayCourses(courses);

//  Use the buttons and the click event to filter the courses with its Text content - "CSE", "WDD" or "All"..

Array.from(dynamicButtons).forEach((button) => {
  button.addEventListener("click", () => {
    filterCourses(courses, button);
  });
});
