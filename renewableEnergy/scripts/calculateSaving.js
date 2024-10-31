function calcularAhorro() {
  const monthlyConsumption = parseFloat(
    document.getElementById("consumption").value
  );
  const costKwh = document.getElementById("precio").value;
  const systemCapacity =document.getElementById("capacity").value;
  
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
  
  
  document.getElementById("resultado").innerHTML = `
  <p>El valor del consumo mensual es: ${monthlyConsumption} <p>
  <p>La capacidad del sistema es: ${monthlyConsumption} <p>
  `
  
  
  }
