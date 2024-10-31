import { LoadData } from "../scripts/functionality.js";

const $providersContainer = document.getElementById("providersContainer");

const url =
  "https://emanuelmunoztorigino.github.io/wdd231/renewableEnergy/data/providersInfo.json";

const providersList = await LoadData(url);

const providerModal = document.getElementById("provider-contact-info");

const displayContactInfo = (provider) => {
  providerModal.innerHTML = "";
  providerModal.innerHTML = `
    <button id="closeModal">X</button>
    <h2>${provider.company_name}</h2>
    <p><strong>Phone Number</strong>: ${provider.phone_number}</p>
    <p><strong>Email</strong>: ${provider.email}</p>
    <p><strong>Website</strong>: <a href="${provider.website}">${provider.website}</a></p>
    `;
    
  providerModal.showModal();

  closeModal.addEventListener("click", () => {
    providerModal.close();
  });
};

const displayProviders = (providersList) => {
  providersList.forEach((provider) => {
    const providerCard = document.createElement("div");
    providerCard.setAttribute("class", "card-providers");

    const imageDiv = document.createElement("div");
    imageDiv.setAttribute("class", "background-div");
    imageDiv.style.backgroundImage = `url(${provider.url})`;
    imageDiv.innerHTML = `<p>${provider.location}</p>`;

    providerCard.appendChild(imageDiv);

    let providerInfoButton = document.createElement("button");
    providerInfoButton.setAttribute("class", "provider-info-button");
    providerInfoButton.innerHTML = `Contact Info`;

    const providerInfoContainer = document.createElement("div");
    providerInfoContainer.setAttribute("class", "info-providers");

    providerInfoContainer.innerHTML = `
    <h2>${provider.company_name}</h2>
    <p>${provider.description}</p>`; /* <button class="provider-info-button">Contact Info</button> */

    providerInfoContainer.appendChild(providerInfoButton);
    providerCard.appendChild(providerInfoContainer);
    $providersContainer.appendChild(providerCard);

    providerInfoButton.addEventListener("click", () =>
      displayContactInfo(provider)
    );
  });
};

window.addEventListener("click", (event) => {
  if (event.target == providerModal) {
    providerModal.close();
  }
});

/*
  const buttons = document.querySelectorAll(".provider-info-button");
  buttons.addEventListener("click", () => displayContactInfo(provider));*/

displayProviders(providersList);
