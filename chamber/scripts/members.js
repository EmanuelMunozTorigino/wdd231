const gridbtn = document.getElementById("gridButton");
const listbtn = document.getElementById("listButton");

const url = "/data/members.json";

companiesList = [];

const getCompanies = async (url) => {
  const response = await fetch(url);

  if (response) {
    companiesList = await response.json();
  }
};

getCompanies(url);

console.log(companiesList);
