import { LoadData } from "../scripts/functionality.js";

const $providersContainer = document.getElementById("providersContainer");

const url =
  "https://emanuelmunoztorigino.github.io/wdd231/renewableEnergy/data/providersInfo.json";

const providersList = await LoadData(url);

const displayProviders = (providersList) => {
  providersList.forEach((provider) => {
    const providerCard = document.createElement("div");
    providerCard.setAttribute("class", "card-providers");

    const imageDiv = document.createElement("div");

    imageDiv.setAttribute("class", "background-div");

    const providerInfoContainer = document.createElement("div");

    providerInfoContainer.setAttribute("class", "info-providers");

    imageDiv.style.backgroundImage = `url(${provider.url})`;

    imageDiv.innerHTML = `<p>${provider.location}</p>`;
    providerCard.appendChild(imageDiv);

    providerInfoContainer.innerHTML = `<h2>${provider.company_name}</h2>
    <p>${provider.description}</p>
    <div class="provider-button-container"><button class="provider-info-button">Contact Info</button></div>`;
    providerCard.appendChild(providerInfoContainer);
    $providersContainer.appendChild(providerCard);
  });
};

displayProviders(providersList);


/*

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

  };*/