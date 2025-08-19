const equationInput = document.getElementById("equationInput");
const calculatorButtons = document.querySelectorAll("button");

let equation = "";

calculatorButtons.forEach(button => {
    button.addEventListener("click", event => {
        const value = event.target.dataset.value;
        const action = event.target.dataset.action;

        if (value) {
            appendToEquation(value);
        }
        else {
            switch (action) {
                case "clear":
                    clear();
                    break;
                case "backspace":
                    backspace();
                    break;
                case "calculate":
                    calculate(equation);
                    break;
            }
        }
    })
})

function clear() {
    equation = "";
    equationInput.value = "";
}

function backspace() {
    equation = equation.slice(0, -1);
    equationInput.value = equation;

}

function calculate(eq) {
    try {
        if(!eq) {
            throw new Error("Enter a value");
        }
        let result = eval(eq).toFixed(2);
        if (!isFinite(result)) {
            throw new Error("Invalid Operation");
        }
        equationInput.value = result;
        equation = String(result);
    } catch (error) {
        console.error(error);
        equationInput.value = error.message;
    }
}

function appendToEquation(value) {
    equationInput.value += value;
    equation += value;
}