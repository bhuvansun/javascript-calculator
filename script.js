function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const expression = document.getElementById('display').value;
    try {
        const result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSquareRoot() {
    const inputValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(inputValue)) {
        const result = Math.sqrt(inputValue);
        document.getElementById('display').value = result;
    }
}

function calculateSin() {
    const inputValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(inputValue)) {
        const result = Math.sin(inputValue);
        document.getElementById('display').value = result;
    }
}

function calculateCos() {
    const inputValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(inputValue)) {
        const result = Math.cos(inputValue);
        document.getElementById('display').value = result;
    }
}

function calculateTan() {
    const inputValue = parseFloat(document.getElementById('display').value);
    if (!isNaN(inputValue)) {
        const result = Math.tan(inputValue);
        document.getElementById('display').value = result;
    }
}