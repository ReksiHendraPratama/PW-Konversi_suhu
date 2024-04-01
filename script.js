// script.js
function convertTemp() {
    const input = parseFloat(document.getElementById('input').value);
    const unitFrom = document.getElementById('unitFrom').value;
    let result = {};
  
    switch (unitFrom) {
      case 'celsius':
        result = {
          celsius: input,
          fahrenheit: (input * 9/5) + 32,
          kelvin: input + 273.15,
          reamur: input * 4/5
        };
        document.getElementById('icon').innerHTML = '°C';
        break;
      case 'fahrenheit':
        result = {
          celsius: (input - 32) * 5/9,
          fahrenheit: input,
          kelvin: (input - 32) * 5/9 + 273.15,
          reamur: (input - 32) * 4/9
        };
        document.getElementById('icon').innerHTML = '°F';
        break;
      case 'kelvin':
        result = {
          celsius: input - 273.15,
          fahrenheit: (input - 273.15) * 9/5 + 32,
          kelvin: input,
          reamur: (input - 273.15) * 4/5
        };
        document.getElementById('icon').innerHTML = 'K';
        break;
      case 'reamur':
        result = {
          celsius: input * 5/4,
          fahrenheit: input * 9/4 + 32,
          kelvin: input * 5/4 + 273.15,
          reamur: input
        };
        document.getElementById('icon').innerHTML = '°R';
        break;
    }
  
    document.getElementById('result').innerHTML = `
      Celsius: ${result.celsius.toFixed(2)}<br>
      Fahrenheit: ${result.fahrenheit.toFixed(2)}<br>
      Kelvin: ${result.kelvin.toFixed(2)}<br>
      Reamur: ${result.reamur.toFixed(2)}
    `;
  }
  