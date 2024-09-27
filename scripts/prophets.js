const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

const $cards = document.getElementById("cards");

async function getProphetData() {
  const response = await fetch(url);

  const data = await response.json();

  //console.table(data.prophets);
  displayProphets(data.prophets);
}

getProphetData(url);

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const $sectionContainer = document.createElement("section");
    const $fullName = document.createElement("h2");

    const $birthdatePara = document.createElement("p");
    const $birthplacePara = document.createElement("p");

    const $portrait = document.createElement("img");

    $fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;

    $birthdatePara.innerHTML = `Date of Birth: ${prophet.birthdate}`;

    $birthplacePara.innerHTML = `Place of Birth: ${prophet.birthplace}`;

    /*
    $portrait.src =
      "https://assets.churchofjesuschrist.org/ec/f8/ecf80a88e31429d0aa0eeec6e2c74851a4bf4235/nauvoo_temple_joseph_art_lds.jpeg";
    $portrait.alt = "Joseph Smith in Nauvoo temple";
    $portrait.loading = "lazy";
    $portrait.width = "200px";
    */

    $portrait.setAttribute("src", prophet.imageurl);
    $portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`
    );

    $portrait.setAttribute("loading", "lazy");
    $portrait.setAttribute("width", "250");
    $portrait.setAttribute("height", "350");

    $sectionContainer.appendChild($fullName);
    $sectionContainer.appendChild($birthdatePara);
    $sectionContainer.appendChild($birthplacePara);
    $sectionContainer.appendChild($portrait);

    $cards.appendChild($sectionContainer);
  });
};
