const dataJSON =
  "https://emanuelmunoztorigino.github.io/wdd231/chamber/data/members.json";

async function LoadData() {
  try {
    const response = await fetch(dataJSON);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading companies data", error);
    return [];
  }
}

const selectRandomMember = (memberList, quantity) => {
  const silverGoldMembers = memberList.companies.filter(
    (member) => member.membershipLevel >= 2
  );

  const randomMembers = silverGoldMembers.sort(() => 0.5 - Math.random());

  return randomMembers.slice(0, quantity);
};

const createSpotlight = (company) => {
  const $sectionContainer = document.createElement("section");

  const $companyName = document.createElement("h2");

  const $companyLogo = document.createElement("img");

  const $addressPara = document.createElement("P");

  const $phoneNumberPara = document.createElement("P");
  const $membershipLevel = document.createElement("P");

  const $websiteURL = document.createElement("a");

  $companyName.setAttribute("class", "showName");
  $companyName.innerHTML = company.name;

  $companyLogo.setAttribute("src", company.logo);
  $companyLogo.setAttribute("alt", `${company.name} Logo`);
  $companyLogo.setAttribute("loading", "lazy");
  $companyLogo.setAttribute("width", "200");

  $websiteURL.setAttribute("href", company.websiteURL);
  $websiteURL.setAttribute("target", "_blank");
  $websiteURL.setAttribute("rel", "noopener noreferrer");
  $websiteURL.innerHTML = company.websiteURL;

  $addressPara.innerHTML = `<strong>Address:</strong> ${company.address}`;
  $phoneNumberPara.innerHTML = `<strong>Phone:</strong> ${company.phoneNumber}`;

  $membershipLevel.innerHTML = `<strong>Membership Level: ${company.membershipLevel}</strong>`;

  $sectionContainer.appendChild($companyName);
  $sectionContainer.appendChild($companyLogo);
  $sectionContainer.appendChild($addressPara);
  $sectionContainer.appendChild($phoneNumberPara);
  $sectionContainer.appendChild($websiteURL);
  $sectionContainer.appendChild($membershipLevel);

  return $sectionContainer;
};

async function displaySpotlights() {
  const companiesData = await LoadData();
  const randomMembers = selectRandomMember(companiesData, 3);
  const $spotlightsContainer = document.getElementById("spotlights-container");

  randomMembers.forEach((member) => {
    const spotlight = createSpotlight(member);
    $spotlightsContainer.appendChild(spotlight);
  });
}

window.addEventListener("load", displaySpotlights);
