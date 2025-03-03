const display = document.querySelector('.display');
const deleteButton = document.getElementById('delete-btn');

function appendToDisplay(input) {
    deleteButton.onclick = deleteDisplay;
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        let expression = display.value.replace('x', '*');

        display.value = eval(expression);

        if (display.value === "Infinity" || Number.isNaN(display.value) || display.value === "undefined") {
            throw new Error("Math Error");
        }
    }
    catch(error) {
        if (error instanceof SyntaxError) {
            display.value = "Syntax Error";
        }
        else{
            display.value = error.message;
        }
    }
    deleteButton.onclick = clearDisplay;
}

function deleteDisplay() {
    display.value = display.value.slice(0, -1);
}