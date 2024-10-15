const currentUrl = window.location.href;

const everything = currentUrl.split("?");

const formData = everything[1].split("&");

const showInfo = document.getElementById("results");

const show = (entry) => {
  formData.forEach((element) => {
    if (element.startsWith(entry)) {
      result = element.split("=")[1].replace("%40", "@").replace("%C3%B1", "ñ");
    }
  });
  return result;
};

showInfo.innerHTML = `
<p>Appointment for ${show("first")} ${show("last")}</p>
<p>Proxy: ${show("ordinance")} on '${show("date")}' in the ${show(
  "location"
)} temple</p>
<p>Your Phone: ${show("phone")}</p>
<p>Your Email: <a href="mailto:${show("email")}">${show("email")}</a></p>
`;
