document.getElementById("joinUsForm").addEventListener("submit", (event) => {
    const timestampInput = document.getElementById("timestamp");
    const now = new Date().toISOString();
    timestampInput.value = now;
  });