const gridbtn = document.getElementById("gridButton");
const listbtn = document.getElementById("listButton");

const $companiesContainer = document.getElementById("grid");

const url =
  "https://emanuelmunoztorigino.github.io/wdd231/chamber/data/members.json";

async function getCompanies(url) {
  const response = await fetch(url);

  if (response) {
    companiesList = await response.json();

    displayCompanies(companiesList.companies);
  }
}

const displayCompanies = (companiesList) => {
  companiesList.forEach((company) => {
    const $sectionContainer = document.createElement("section");

    const $companyName = document.createElement("h2");

    const $companyLogo = document.createElement("img");

    const $addressPara = document.createElement("P");

    const $phoneNumberPara = document.createElement("P");

    const $websiteURL = document.createElement("a");

    $companyName.innerHTML = company.name;

    $companyLogo.setAttribute("src", company.logo);
    $companyLogo.setAttribute("alt", `${company.name} Logo`);
    $companyLogo.setAttribute("loading", "lazy");
    $companyLogo.setAttribute("width", "200");

    $websiteURL.setAttribute("href", company.websiteURL);
    $websiteURL.setAttribute("target", "_blank");
    $websiteURL.setAttribute("rel", "noopener noreferrer");
    $websiteURL.innerHTML = company.websiteURL;

    $addressPara.innerHTML = `Address: ${company.address}`;
    $phoneNumberPara.innerHTML = `Phone: ${company.phoneNumber}`;

    $sectionContainer.appendChild($companyName);
    $sectionContainer.appendChild($companyLogo);
    $sectionContainer.appendChild($addressPara);
    $sectionContainer.appendChild($phoneNumberPara);
    $sectionContainer.appendChild($websiteURL);

    $companiesContainer.appendChild($sectionContainer);
  });
};

getCompanies(url);

gridbtn.addEventListener("click", () => {
  $companiesContainer.classList.add("grid");
  $companiesContainer.classList.remove("list");
});

listbtn.addEventListener("click", () => {
  $companiesContainer.classList.add("list");
  $companiesContainer.classList.remove("grid");
});

/*

const displayCompanies = (companiesList) => {
  companies
  List.forEach((company) => {
    const $sectionContainer = document.createElement("section");

    const $companyName = document.createElement("h2");

    const $companyLogo = document.createElement("img");

    const $addressPara = document.createElement("P");

    const $phoneNumberPara = document.createElement("P");

    const $websiteURL = document.createElement("a");

    $companyName.innerHTML = company.name;

    $companyLogo.setAttribute("src", company.logo);
    $companyLogo.setAttribute("alt", `${company.name} Logo`);
    $companyLogo.setAttribute("loading", "lazy");
    $companyLogo.setAttribute("width", "200");

    $websiteURL.setAttribute("href", company.websiteURL);
    $websiteURL.setAttribute("target", "_blank");
    $websiteURL.setAttribute("rel", "noopener noreferrer");
    $websiteURL.innerHTML = company.websiteURL;

    $addressPara.innerHTML = `Address: ${company.address}`;
    $phoneNumberPara.innerHTML = `Phone: ${company.phoneNumber}`;

    $sectionContainer.appendChild($companyName);
    $sectionContainer.appendChild($companyLogo);
    $sectionContainer.appendChild($addressPara);
    $sectionContainer.appendChild($phoneNumberPara);
    $sectionContainer.appendChild($websiteURL);

    $companiesContainer.appendChild($sectionContainer);
  });
};
*/
