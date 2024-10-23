const currentUrl = window.location.href;

const everything = currentUrl.split("?");

const formData = everything[1].split("&");

const showInfo = document.getElementById("results");

const show = (entry) => {
  formData.forEach((element) => {
    if (element.startsWith(entry)) {
      result = element
        .split("=")[1]
        .replace("%40", "@")
        .replace("%C3%B1", "ñ")
        .replace("+", " ")
        .replace("%3A", ":")
        .replace("%2E", ".");
    }
  });
  return result;
};

const timestamp = show("timestamp");
const decodedTimestamp = decodeURIComponent(timestamp);

// Crea una fecha legible para mostrar
const formattedDate = new Date(decodedTimestamp).toLocaleString();

showInfo.innerHTML = `
<h2>Applicant Information:</h2>
<ul>
<li>Name: ${show("fname")} ${show("lname")}</li>
<li>Your Phone: <strong>${show("phone")}</strong></li>
<li>Your Email: <a href="mailto:${show("email")}">${show("email")}</a></li>
</ul>
<h2>Business/Organization Information:</h2>
<ul>
<li>The organization is: <strong>${show("organization-name")}</strong></li>
<li>Your title on the organization - <strong>${show("organization-title")}</strong></li>
<li> The membership that you choosed was: <strong>${show(
  "membership-level"
)}</strong></li>
<li> The timestamp when you send the form was: <strong>${formattedDate}</strong></li>
</ul>
`;
