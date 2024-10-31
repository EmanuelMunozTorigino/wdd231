import {
  getRandomInt,
  LoadData,
  getRandomDec,
  tariffTable,
} from "./functionality.js";

const url = "https://api.bluelytics.com.ar/v2/latest";

const dolarPrices = await LoadData(url);

const dolarBlue = dolarPrices.blue.value_sell; // From all of dollar exchange rate, extracted dolar blue

let instalationPerKw = dolarBlue * 1300; // it indicates how much money is in ARS (Argentine peso) in dolar blue,

let InstallationCost = 0;

let costFixedKwh = 0; // It is found for the tariff array

const getMonthlyProduction = (systemCapacity) => {
  let monthlyProduction = 0; // Kwh/month

  switch (systemCapacity) {
    case "small": //  2kw - 3wk
      InstallationCost = getRandomInt(2, 3) * instalationPerKw;
      monthlyProduction = getRandomInt(240, 360);
      break;
    case "medium": // 4kw - 5kw
      InstallationCost = getRandomInt(4, 5) * instalationPerKw;
      monthlyProduction = getRandomInt(480, 600);
      break;
    case "large": // 7kw - 8kw
      InstallationCost = getRandomInt(7, 8) * instalationPerKw;
      monthlyProduction = getRandomInt(720, 960);
      break;
    case "extraLarge": // 10kw - 12kw
      InstallationCost = getRandomInt(10, 12) * instalationPerKw;
      monthlyProduction = getRandomInt(1200, 1500);
      break;
    default:
      console.error("it capacity doesn't exists.. try again.");
      break;
  }

  return monthlyProduction;
};

const getEfficientProduction = (efficiencyFactor, monthlyProduction) => {
  return efficiencyFactor * monthlyProduction;
};

const calculateMonthlyConsumption = (
  energyConsumptionKWh,
  category,
  tariffTable
) => {
  // Validate the category
  if (!["N1", "N2", "N3"].includes(category)) {
    console.error("Invalid category");
    return null;
  }

  // Find the corresponding consumption range
  const range = tariffTable.find(
    (range) =>
      energyConsumptionKWh >= range.min && energyConsumptionKWh <= range.max
  );

  if (!range) {
    console.error("Consumption outside of specified ranges");
    return null;
  }

  // Get the CF index and the additional fee for the category
  const cf = range.CF;
  const additional = range.additional[category];
  costFixedKwh = range.CF;

  // Calculate the total expense
  const totalExpense = energyConsumptionKWh * additional + cf;
  return totalExpense;
};

function calcularAhorro(event) {
  event.preventDefault(); // Evita que el formulario se envíe

  const systemCapacity = document.querySelector(
    'input[name="capacity"]:checked'
  ).value; // Capacity range (small, medium, large, extra Large)

  let monthlyProduction = getMonthlyProduction(systemCapacity);

  const category = document.querySelector(
    'input[name="category"]:checked'
  ).value; //Category (C1, C2, C3);

  const consumption = parseFloat(document.getElementById("consumption").value);

  const efficiencyFactor = getRandomDec(0.75, 0.85);

  let EfficientProduction = getEfficientProduction(
    efficiencyFactor,
    monthlyProduction
  );

  const monthlyConsumption = calculateMonthlyConsumption(
    consumption,
    category,
    tariffTable
  ); // %ARS;

  const monthlySavings = Math(
    min(monthlyConsumption, EfficientProduction) * costFixedKwh
  );

  console.log(`Este es el costo de la instalación ${InstallationCost}`);

  const returnTime = InstallationCost / monthlySavings;

  const calculateYears = returnTime / 12;

  console.log(`El valor de retorno es: ${returnTime}`);
  console.log(monthlySavings);

  document.getElementById("results").innerHTML = `
  <p>Monthly savings estimated: ${monthlySavings.toFixed(2)} ARS</p>
  <p>Return time: ${returnTime.toFixed(1)} meses (${calculateYears.toFixed(
    1
  )} years)</p>  
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".saving-form");
  form.addEventListener("submit", calcularAhorro);
});
