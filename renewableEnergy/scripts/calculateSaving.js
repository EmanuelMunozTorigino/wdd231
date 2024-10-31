function calcularAhorro() {
  const monthlyConsumption = parseFloat(
    document.getElementById("consumo").value
  );
  const costKwh = parseFloat(document.getElementById("precio").value);
  const systemCapacity = parseFloat(document.getElementById("capacidad").value);

  const systemCapacityRadio = parseFloat(document.querySelector("capacidad").value);
  
  
  
  const efficiency =
    parseFloat(document.getElementById("eficiencia").value) / 100;
  const costoInstalacion = parseFloat(document.getElementById("costo").value);

  const monthlyProduction = systemCapacity * efficiency;
  const monthlySavings =
    Math.min(monthlyConsumption, monthlyProduction) * costKwh;
  const returnTime = costoInstalacion / monthlySavings;

  document.getElementById("resultado").innerHTML = `
      Ahorro mensual estimado: ${monthlySavings.toFixed(2)} ARS <br>
      Tiempo de retorno: ${returnTime.toFixed(1)} meses
    `;
}
