import { countries } from "./functionality.js";

const $countriesContainer = document.getElementById("countriesContainer");

const providerModal = document.getElementById("countriesModal");

const displayContactInfo = (country) => {
  providerModal.innerHTML = "";
  providerModal.innerHTML = `
        <button id="closeModal">X</button>
        <h2>${country.name}</h2>
        <p><strong>Details</strong>: ${country.details}</p>
        <p><strong>Incentives</strong>: ${country.incentives}</p>
        `;

  providerModal.showModal();

  closeModal.addEventListener("click", () => {
    providerModal.close();
  });
};

const displayCountries = (countries) => {
  countries.forEach((country) => {
    const countryCard = document.createElement("div");
    countryCard.setAttribute("class", "card-providers");

    const imageDiv = document.createElement("div");
    imageDiv.setAttribute("class", "background-div");
    imageDiv.style.backgroundImage = `url(${country.flag})`;
    imageDiv.innerHTML = `<p>${country.name} flag</p>`;

    countryCard.appendChild(imageDiv);

    let countryDetailsButton = document.createElement("button");
    countryDetailsButton.setAttribute("class", "provider-info-button");
    countryDetailsButton.innerHTML = `Show details`;

    const countryDetails = document.createElement("div");

    countryDetails.setAttribute("class", "info-providers");

    countryDetails.innerHTML = `
    <h2>${country.name}</h2>
    <p>${country.description}</p>`;

    console.log(countryDetails);

    countryDetails.appendChild(countryDetailsButton);
    countryCard.appendChild(countryDetails);
    console.log(countryCard);
    $countriesContainer.appendChild(countryCard);

    countryDetailsButton.addEventListener("click", () =>
      displayContactInfo(country)
    );
  });
};

window.addEventListener("click", (event) => {
  if (event.target == providerModal) {
    providerModal.close();
  }
});

displayCountries(countries);
