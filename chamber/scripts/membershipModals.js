const membershipDialog = document.getElementById("membershipDialog");
const membershipDialogHeader = document.querySelector(
  ".membershipDialogHeader"
);
const closeButton = document.getElementById("closeButton");
const dialogInfo = document.getElementById("membershipInfo");

const membershipHeader = document.getElementById("membershipHeader");

nonProfitButton.addEventListener("click", () => {
  membershipDialog.showModal();
  membershipHeader.innerHTML = "Non Profit membership";

  dialogInfo.innerHTML = `
  <ul>
    <li>Basic inclusion in the chamber’s business directory.</li>
    <li>Access to public events and newsletters.</li>
  </ul>`;
});

bronzeButton.addEventListener("click", () => {
  membershipDialog.showModal();

  membershipHeader.innerHTML = "Bronze Membership";

  dialogInfo.innerHTML = `
  <ul>
    <li>All "Non Profit" benefits.</li>
    <li>Exclusive discounts on events and training sessions.</li>
    <li>Limited participation in local trade fairs.</li>
  </ul>`;
});

silverButton.addEventListener("click", () => {
  membershipDialog.showModal();
  membershipHeader.innerHTML = "Silver Membership";

  dialogInfo.innerHTML = `
  <ul>
    <li>All "Bronze" benefits.</li>
    <li>Access to private networking with affiliated businesses.</li>
    <li>Monthly promotion of the company on the chamber’s social media.</li>
    <li>Spotlight business information to the home page</li>
    </ul>`;
});

goldButton.addEventListener("click", () => {
  membershipDialog.showModal();
  membershipHeader.innerHTML = "Golden Membership";

  dialogInfo.innerHTML = `
  <ul>
    <li>All "Silver" benefits.</li>
    <li>Featured advertising on the chamber’s website and newsletter.</li>
    <li>Free participation in premium events and priority for trade fair booths.</li>
  </ul>`;
});

closeButton.addEventListener("click", () => {
  membershipDialog.close();
});
