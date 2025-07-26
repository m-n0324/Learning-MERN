
    let currentDisplay = '';
    document.querySelector('#display').value = currentDisplay;

    function append(value) {
      currentDisplay += value;
      document.querySelector('#display').value = currentDisplay;
    }

    // function appendToDisplay(value) {
    //   currentDisplay += value;
    //   document.querySelector('#display').value = currentDisplay;
    // }


    function clearDisplay() {
      currentDisplay = '';
      document.querySelector('#display').value = currentDisplay;
    }

    function deleteLast() {
      currentDisplay = currentDisplay.slice(0, -1);
      document.querySelector('#display').value = currentDisplay;
    }

   
function calculateResult() {
  const currentDisplay = document.querySelector('#display');
  try {
    let expression = currentDisplay.value
      .replace(/π/g, Math.PI)
      .replace(/e/g, Math.E)
      .replace(/√\(/g, 'Math.sqrt(')
      .replace(/sin\(/g, 'Math.sin(')
      .replace(/cos\(/g, 'Math.cos(')
      .replace(/tan\(/g, 'Math.tan(')
      .replace(/log\(/g, 'Math.log10(')
      .replace(/ln\(/g, 'Math.log(')
      .replace(/\^/g, '**')
      .replace(/(\d+)!/g, 'factorial($1)');  
    const result = eval(expression);
    currentDisplay.value = result;
  } catch (error) {
    currentDisplay.value = 'Error';
  }
}

function factorial(n) {
  n = parseInt(n);
  if (isNaN(n) || n < 0) return NaN;
  if (n === 0 || n === 1) return 1;
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res *= i;
  }
  return res;
}


  
    
    const display = document.getElementById('display');

    function append(value) {
      display.value += value;
    }

    function clearDisplay() {
      display.value = '';
    }

    function backspace() {
      display.value = display.value.slice(0, -1);
    }

    // function calculate() {
    //   try {
    //     let expression = display.value
    //       .replace(/π/g, Math.PI)
    //       .replace(/e/g, Math.E)
    //       .replace(/√\(/g, 'Math.sqrt(')
    //       .replace(/sin\(/g, 'Math.sin(')
    //       .replace(/cos\(/g, 'Math.cos(')
    //       .replace(/tan\(/g, 'Math.tan(')
    //       .replace(/log\(/g, 'Math.log10(')
    //       .replace(/ln\(/g, 'Math.log(')
    //       .replace(/\^/g, '**');

    //     display.value = eval(expression);
    //   } catch (error) {
    //     display.value = 'Error';
    //   }
    // }
  