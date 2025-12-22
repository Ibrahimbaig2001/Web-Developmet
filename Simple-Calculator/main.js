let currentExpression = '';

function appendNumber(number) {
    currentExpression += number;
    document.getElementById('result').value = currentExpression;
}

function appendOperator(operator) {
    currentExpression += operator;
    document.getElementById('result').value = currentExpression;
}

function calculateResult() {
    try {
        let expression = currentExpression
            .replace(/÷/g, '/')
            .replace(/x/g, '*');

        currentExpression = eval(expression).toString();
        document.getElementById('result').value = currentExpression;
    } catch (error) {
        document.getElementById('result').value = 'Error';
        currentExpression = '';
    }
}

function clearResult() {
    currentExpression = '';
    document.getElementById('result').value = '';
}
