// Array instances

const course = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTH",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 28,
      days: "TTH",
      instructor: "Sis A",
    },
  ],
  enrollStudent: function (sectionNum) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );

    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled++;
      renderSections(this.sections);
    }
  },

  dropStudent: function (sectionNum) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );

    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled--;
      renderSections(this.sections);
    }
  },
};

// Functions

const DisplayCourseInfo = (course) => {
  const headingCourse = document.getElementById("courseName");
  const headingCode = document.getElementById("courseCode");

  headingCourse.innerHTML = course.name;
  headingCode.innerHTML = course.code;
};

const sectionTemplate = (section) => {
  return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
    </tr>
  `;
};

const renderSections = (sections) => {
  const html = sections.map(sectionTemplate);

  document.getElementById("sections").innerHTML = html.join("");
};

// Variables instances

document.getElementById("enrollStudent").addEventListener("click", () => {
  const sectionNum = document.getElementById("sectionNumber").value;
  course.enrollStudent(sectionNum);
});

document.getElementById("dropStudent").addEventListener("click", () => {
  const sectionNum = document.getElementById("sectionNumber").value;
  course.dropStudent(sectionNum);
});

DisplayCourseInfo(course);

renderSections(course.sections);
