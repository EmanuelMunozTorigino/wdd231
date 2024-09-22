// An array of courses from the first certificate of byu Idaho software development degree

const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
    technology: ["C#"],
    completed: false,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];

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

courseURL.textContent = "Web and Computer Programming";

creditsContainer.innerHTML = `The Certificate '<strong><a class="course-link" href="${courseURL}" target="_blank" rel="noopener noreferrer">Web and Computer Programming</a></strong>' has: <strong>${totalCredits}</strong> credits`;

$mainContainer.appendChild(creditsContainer);

console.log(creditsContainer.getElementsByClassName("a"));

/*
creditsContainer.getElementsByTagName("a").classList.add(".nav-link");
*/

displayCourses(courses);

//  Use the buttons and the click event to filter the courses with its Text content - "CSE", "WDD" or "All"..

Array.from(dynamicButtons).forEach((button) => {
  button.addEventListener("click", () => {
    filterCourses(courses, button);
  });
});
