function convertTemperature() {
    // Get user input
    const tempInput = document.getElementById("temp").value;
    const tempUnit = document.getElementById("unit").value;
  
    // Validate input
    if (isNaN(tempInput)) {
      document.getElementById("result").textContent = "Invalid input: not a number";
      return;
    }
  
    // Convert temperature
    let celsius, fahrenheit, kelvin;
    if (tempUnit === "celsius") {
      celsius = Number(tempInput);
      fahrenheit = celsius * 9/5 + 32;
      kelvin = celsius + 273.15;
    } else if (tempUnit === "fahrenheit") {
      fahrenheit = Number(tempInput);
      celsius = (fahrenheit - 32) * 5/9;
      kelvin = celsius + 273.15;
    } else if (tempUnit === "kelvin") {
      kelvin = Number(tempInput);
      celsius = kelvin - 273.15;
      fahrenheit = celsius * 9/5 + 32;
    }
  
    // Display result
    let resultText = `Celsius: ${celsius.toFixed(2)}°C<br>`;
    resultText += `Fahrenheit: ${fahrenheit.toFixed(2)}°F<br>`;
    resultText += `Kelvin: ${kelvin.toFixed(2)} K`;
    document.getElementById("result").innerHTML = resultText;
  }
  
  // Add event listener to "Convert" button
  document.getElementById("convert").addEventListener("click", convertTemperature);
  