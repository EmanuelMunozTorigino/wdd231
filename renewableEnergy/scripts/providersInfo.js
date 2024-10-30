import { LoadData } from "../scripts/functionality.js";

const $providersContainer = document.getElementById("providersContainer");

const url =
  "https://emanuelmunoztorigino.github.io/wdd231/renewableEnergy/data/providersInfo.json";

const providersList = await LoadData(url);

const displayProviders = (providersList) => {
  providersList.forEach((provider) => {
    let id = 1;
    const providerCard = document.createElement("div");
    const imageDiv = document.createElement("div");

    imageDiv.setAttribute("class", "card-providers");

    const providerInfoContainer = document.createElement("div");
    imageDiv.style.backgroundImage = `url(${provider.url})`;

    console.log(imageDiv.backgroundImage);

    imageDiv.innerHTML = `<p>${provider.location}</p>`;
    providerCard.appendChild(imageDiv);

    providerInfoContainer.innerHTML = `<h2>${provider.company_name}</h2>
    <p>${provider.description}</p>
    <button id=${id}>Contact Info</button>`;
    providerCard.appendChild(providerInfoContainer);
    $providersContainer.appendChild(providerCard);
    id++;
  });
};

displayProviders(providersList);
