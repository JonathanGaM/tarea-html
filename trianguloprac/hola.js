var historial = [];
function agregarOperacion(resultado) {
  historial.push(resultado);
  var historyTable = document.getElementById("history-body");
  var newRow = historyTable.insertRow();
  var newCell = newRow.insertCell();
  var newText = document.createTextNode(resultado);
  newCell.appendChild(newText);
}
function borrarPrimeraFila() {
  var historyTable = document.getElementById("history-body"); historyTable.deleteRow(0);
}
function calcularArea() {
  var side1 = parseFloat(document.getElementById("side1").value);
  var side2 = parseFloat(document.getElementById("side2").value);
  var side3 = parseFloat(document.getElementById("side3").value);
  if (esTrianguloValido(side1, side2, side3)) {
    var semiperimeter = (side1 + side2 + side3) / 2;
    var area = Math.sqrt(semiperimeter * (semiperimeter - side1) * (semiperimeter - side2) *  (semiperimeter - side3)
    );
    document.getElementById("result").textContent = "El área del triángulo es: " + area.toFixed(2);agregarOperacion("Área: " + area.toFixed(2));
  } else {
    document.getElementById("result").textContent =  "Los lados no forman un triángulo válido.";
  }
}
function calcularPerimetro() {
  var side1 = parseFloat(document.getElementById("side1").value);
  var side2 = parseFloat(document.getElementById("side2").value);
  var side3 = parseFloat(document.getElementById("side3").value);
  if (esTrianguloValido(side1, side2, side3)) {
    var perimeter = side1 + side2 + side3;
    document.getElementById("result").textContent = "El perímetro del triángulo es: " + perimeter.toFixed(2);agregarOperacion("Perímetro: " + perimeter.toFixed(2));
  } else {
    document.getElementById("result").textContent ="Los lados no forman un triángulo válido.";
  }
}
function TipoTriangulo() {
  var side1 = parseFloat(document.getElementById("side1").value);
  var side2 = parseFloat(document.getElementById("side2").value);
  var side3 = parseFloat(document.getElementById("side3").value);
  if (esTrianguloValido(side1, side2, side3)) {
    if (side1 === side2 && side2 === side3) {
      document.getElementById("result").textContent = "Es un triángulo equilátero";agregarOperacion("Tipo: Equilátero");
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      document.getElementById("result").textContent = "Es un triángulo isósceles";agregarOperacion("Tipo: Isósceles");
    } else {
      document.getElementById("result").textContent = "Es un triángulo escaleno";agregarOperacion("Tipo: Escaleno");
    }
  } else {
    document.getElementById("result").textContent = "Los lados no forman un triángulo válido.";
  }
}
function esTrianguloValido(side1, side2, side3) {
  return ( side1 + side2 > side3 && side1 + side3 > side2 &&  side2 + side3 > side1);
}
