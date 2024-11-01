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

showInfo.innerHTML = `
<h2>Consult information:</h2>
<ul>
<li>Name: ${show("fname")} ${show("lname")}</li>
<li>Your Phone: <strong>${show("phone")}</strong></li>
<li>Your Email: <a href="mailto:${show("email")}">${show("email")}</a></li>
</ul>
<p>The details of the consult is: <strong>${show("details")}</strong></p>
`;
