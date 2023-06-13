function convertir() {
    // Obtener los valores de los campos
    var pesos = parseFloat(document.getElementById("pesos").value);
    var dolares = parseFloat(document.getElementById("dolares").value);
    var tasaCambio = parseFloat(document.getElementById("tasa-cambio").value);
  
    // Realizar la conversión de Pesos a Dólares
    if (!isNaN(pesos)) {
      var conversionDolares = pesos / tasaCambio;
      document.getElementById("dolares").value = conversionDolares.toFixed(2);
    }
  
    // Realizar la conversión de Dólares a Pesos
    if (!isNaN(dolares)) {
      var conversionPesos = dolares * tasaCambio;
      document.getElementById("pesos").value = conversionPesos.toFixed(2);
    }
  }
  
  function limpiar() {
    // Limpiar los campos
    document.getElementById("pesos").value = "";
    document.getElementById("dolares").value = "";
    document.getElementById("tasa-cambio").value = "";
    document.getElementById("resultado").textContent = "";
  }
  