let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function appendOperator(operator) {
    if (displayValue !== '' && !isLastCharOperator()) {
        displayValue += operator;
        updateDisplay();
    } else if (displayValue !== '' && isLastCharOperator()) {
        // Replace the last operator with the new one
        displayValue = displayValue.slice(0, -1) + operator;
        updateDisplay();
    }
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function changeSign() {
    displayValue = (parseFloat(displayValue) * -1).toString();
    updateDisplay();
}

function percentage() {
    displayValue = (parseFloat(displayValue) / 100).toString();
    updateDisplay();
}

function calculateResult() {
    try {
        let result = eval(displayValue);
        if (Number.isFinite(result)) {
            // Round the result to 5 decimal places
            displayValue = result.toFixed(5).toString();
        } else {
            displayValue = 'Error';
        }
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function isLastCharOperator() {
    const lastChar = displayValue.slice(-1);
    return ['+', '-', '*', '/'].includes(lastChar);
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 100
    });
  
    ScrollReveal().reveal('.content', { origin: 'top' });
    ScrollReveal().reveal('.container', { origin: 'right' });
    ScrollReveal().reveal('.content h1', { origin: 'right' });
    ScrollReveal().reveal('.content p', { origin: 'left' });
  });