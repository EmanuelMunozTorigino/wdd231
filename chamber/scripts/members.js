const gridbtn = document.getElementById("gridButton");
const listbtn = document.getElementById("listButton");

const url =
  "https://emanuelmunoztorigino.github.io/wdd231/chamber/data/members.json";

async function getCompanies(url) {
  const response = await fetch(url);

  if (response) {
    companiesList = await response.json();

    console.table(companiesList.companies);

    displayCompanies(companiesList.companies);
  }
}

const displayCompanies = (companiesList) => {
  const $articleContainer = document.createElement("article");
  const $sectionContainer = document.createElement("section");

  const $companyLogo = document.createElement("img");

  const $addressPara = document.createElement("P");

  const $phoneNumberPara = document.createElement("P");

  const $companyURL = document.createElement("a");
};

let companiesList = getCompanies(url);
